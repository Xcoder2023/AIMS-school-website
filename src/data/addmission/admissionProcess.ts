import {
  FileText,
  FolderOpen,
  ClipboardCheck,
  GraduationCap,
} from "lucide-react";

export const admissionProcess = {
  badge: "Admission Process",

  title: "Your Journey to AIMS in Four Simple Steps",

  description:
    "Our admission process is designed to be clear and straightforward for parents and prospective students.",

  steps: [
    {
      number: "01",
      icon: FileText,
      title: "Apply Online",
      description:
        "Complete the admission application form with accurate student information.",
    },

    {
      number: "02",
      icon: FolderOpen,
      title: "Submit Documents",
      description:
        "Provide the required academic records, birth certificate and other supporting documents.",
    },

    {
      number: "03",
      icon: ClipboardCheck,
      title: "Entrance Assessment",
      description:
        "Qualified applicants will be invited for an entrance examination and interview.",
    },

    {
      number: "04",
      icon: GraduationCap,
      title: "Admission Offer",
      description:
        "Successful applicants receive an admission offer and enrollment instructions.",
    },
  ],
};