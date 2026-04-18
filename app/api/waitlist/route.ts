import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const segmentKey = process.env.RESEND_SEGMENT;

  if (segmentKey) {
    const auth = Buffer.from(`${segmentKey}:`).toString("base64");
    const headers = {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/json",
    };
    try {
      await Promise.all([
        fetch("https://api.segment.io/v1/identify", {
          method: "POST",
          headers,
          body: JSON.stringify({ userId: email, traits: { email } }),
        }),
        fetch("https://api.segment.io/v1/track", {
          method: "POST",
          headers,
          body: JSON.stringify({
            userId: email,
            event: "Waitlist Joined",
            properties: { email },
          }),
        }),
      ]);
    } catch (err) {
      console.error("Segment error", err);
    }
  }

  return NextResponse.json({ success: true });
}
