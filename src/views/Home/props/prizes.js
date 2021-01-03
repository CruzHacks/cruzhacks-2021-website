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
      "Create a project dedicated to expanding healthcare access to everyone through a variety of means. Your project can address either/both physical or mental health!",
  },
  {
    title: "Earth Hacks",
    icon: <EarthHacksIcon />,
    text:
      "This category is dedicated to supporting hackers interested in sustainability and earth conservation efforts and technologies.",
  },
  {
    title: "Justice Hacks",
    icon: <JusticeHacksIcon />,
    text:
      "This category hopes to support and shine a light on projects related to civil liberties and social justice!",
  },
  {
    title: "Best Cruz Hack",
    icon: <SantaCruzHacksIcon />,
    text: "Create something that best embodies the essence of Santa Cruz!",
  },
  {
    title: "Best UI / UX",
    icon: <BestUIUXIcon />,
    text: "Create a project that has a great design and user experience!",
  },
  {
    title: "Best Beginner",
    icon: <BestBeginnerIcon />,
    text:
      "Hackathons are meant for everyone, especially our for first-time hackers! To that end, we've created a prize category for teams with all first-time hackers.",
  },
];
