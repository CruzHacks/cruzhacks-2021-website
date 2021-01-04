import { ReactComponent as HealthHacksIcon } from "images/components/prizes/health_hacks.svg";
import { ReactComponent as EarthHacksIcon } from "images/components/prizes/earth_hacks.svg";
import { ReactComponent as JusticeHacksIcon } from "images/components/prizes/justice_hacks.svg";
import { ReactComponent as SantaCruzHacksIcon } from "images/components/prizes/sc_hacks.svg";
import { ReactComponent as BestUIUXIcon } from "images/components/prizes/best_ui_ux.svg";
import { ReactComponent as BestBeginnerIcon } from "images/components/prizes/best_beginner.svg";

export const topics = [
  {
    title: "Health Hacks",
    icon: <HealthHacksIcon />,
    text:
      "This category aspires to address healthcare disparities. How do we support mental & physical well-being with accessible services?",
  },
  {
    title: "Earth Hacks",
    icon: <EarthHacksIcon />,
    text:
      "This category is dedicated to supporting sustainability and conservation efforts. How can we live harmoniously with our planet?",
  },
  {
    title: "Justice Hacks",
    icon: <JusticeHacksIcon />,
    text:
      "This category aims to drive innovation for civil liberty and social justice. How can we uphold truth & order in a (mis)information age?",
  },
  {
    title: "Best Cruz Hack",
    icon: <SantaCruzHacksIcon />,
    text: "Create something that best embodies the essence of Santa Cruz!",
  },
  {
    title: "Best UI / UX",
    icon: <BestUIUXIcon />,
    text:
      "Have a new paradigm for interaction design? Create a project that has an awesome user experience!",
  },
  {
    title: "Best Beginner",
    icon: <BestBeginnerIcon />,
    text:
      "Hackathons are meant for everyone, especially our first-timers! We've created a prize category to reward teams composed of all first-time hackers.",
  },
];
