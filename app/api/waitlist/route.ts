import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const segmentId = process.env.RESEND_SEGMENT;

  if (!apiKey || !segmentId) {
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.contacts.segments.add({ email, segmentId });

  if (error) {
    console.error("Resend error", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
