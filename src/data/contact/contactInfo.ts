import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export const contactInfo = {
  badge: "Get In Touch",

  title: "We'd Love to Hear From You",

  description:
    "Whether you're a prospective parent, student, alumnus or visitor, we're always available to answer your questions and guide you.",

  items: [
    {
      icon: MapPin,
      title: "School Address",
      value:
        "Akanu Ibiam Memorial Seminary, Kpirikpiri, Abakaliki, Ebonyi State, Nigeria",
    },

    {
      icon: Phone,
      title: "Phone Number",
      value: "+234 901 404 3981",
    },

    {
      icon: Mail,
      title: "Email Address",
      value: "info@aimspresbyterian.com.ng",
    },

    {
      icon: Clock,
      title: "Office Hours",
      value: "Monday – Friday\n8:00 AM – 4:00 PM",
    },
  ],
};