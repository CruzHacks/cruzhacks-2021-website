import AmandaRobson from "images/components/speakers/AmandaRobson.jpeg";
import JomayraHerrera from "images/components/speakers/JomayraHerrera.jpeg";
import JonKalfayan from "images/components/speakers/JonKalfayan.jpeg";
import MichaelCesar from "images/components/speakers/MichaelCesar.jpeg";
import ComingSoonIcon from "images/components/speakers/ComingSoon.svg";

export interface SpeakerProp {
  speakerName: string;
  image: string;
  company: string;
  companyLink?: string;
  linkedin?: string;
  isOpening?: boolean;
}

export const speakers = [
  {
    speakerName: "Amanda Robson",
    image: AmandaRobson,
    company: "Cowboy Ventures",
    companyLink: "https://www.cowboy.vc/",
    linkedin: "https://www.linkedin.com/in/amanda-robson-7227685b/",
    isOpening: true,
  },
  {
    speakerName: "Jomayra Herrera",
    image: JomayraHerrera,
    company: "Cowboy Ventures",
    companyLink: "https://www.cowboy.vc/",
    linkedin: "https://www.linkedin.com/in/jomayraherrera/",
    isOpening: true,
  },
  {
    speakerName: "Jon Kalfayan",
    image: JonKalfayan,
    company: "Piazza",
    companyLink: "https://piazza.com/",
    linkedin: "https://www.linkedin.com/in/jon-kalfayan-37752385/",
    isOpening: true,
  },
  {
    speakerName: "Michael Cesar",
    image: MichaelCesar,
    company: "Duet",
    companyLink: "https://giveduet.org/",
    linkedin: "https://www.linkedin.com/in/cesarmichael/",
  },
];

export const comingSoon = [
  {
    speakerName: "Coming Soon",
    image: ComingSoonIcon,
    company: "TBD",
    linkedin: "TBD",
  },
  {
    speakerName: "Coming Soon",
    image: ComingSoonIcon,
    company: "TBD",
    linkedin: "TBD",
  },
];
