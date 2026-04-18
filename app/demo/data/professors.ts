export type Professor = {
  id: number
  name: string
  dept: string
  institution: string
  initials: string
  color: string
}

export const PROFESSORS: Professor[] = [
  { id: 1, name: "Dr. M. Okonkwo",   dept: "History",               institution: "University of Lagos",        initials: "MO", color: "#1B4332" },
  { id: 2, name: "Dr. A. Lindqvist", dept: "Environmental Science", institution: "Uppsala University",         initials: "AL", color: "#2D6A8F" },
  { id: 3, name: "Dr. S. Achebe",    dept: "English Literature",    institution: "Howard University",          initials: "SA", color: "#7B3F9E" },
  { id: 4, name: "Dr. P. Nguyen",    dept: "Biology",               institution: "UCLA",                       initials: "PN", color: "#C2410C" },
  { id: 5, name: "Dr. D. Osei",      dept: "Economics",             institution: "London School of Economics", initials: "DO", color: "#1a7a5e" },
  { id: 6, name: "Dr. R. Hassan",    dept: "Philosophy",            institution: "Cairo University",           initials: "RH", color: "#9B2335" },
  { id: 7, name: "Dr. T. Ramirez",   dept: "Mathematics",           institution: "UNAM",                       initials: "TR", color: "#5B4FCF" },
  { id: 8, name: "Dr. C. Morales",   dept: "Chemistry",             institution: "Univ. of Chile",             initials: "CM", color: "#4A1942" },
]
