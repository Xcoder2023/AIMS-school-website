import {
  Atom,
  BookOpen,
  BriefcaseBusiness,
  Laptop,
} from "lucide-react";

export const subjects = [
  {
    id: 1,
    title: "Sciences",
    icon: Atom,
    items: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "Further Mathematics",
    ],
  },
  {
    id: 2,
    title: "Humanities",
    icon: BookOpen,
    items: [
      "English Language",
      "Literature",
      "Christian Religious Studies",
      "Government",
      "History",
    ],
  },
  {
    id: 3,
    title: "Commercial",
    icon: BriefcaseBusiness,
    items: [
      "Economics",
      "Commerce",
      "Financial Accounting",
      "Marketing",
    ],
  },
  {
    id: 4,
    title: "Technology",
    icon: Laptop,
    items: [
      "Computer Studies",
      "ICT",
      "Technical Drawing",
      "Basic Technology",
    ],
  },
];