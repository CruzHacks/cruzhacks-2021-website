import AmandaRobson from "images/components/speakers/AmandaRobson.jpeg";
import BevCrair from "images/components/speakers/BevCrair.jpg";
import CynthiaLarive from "images/components/speakers/CynthiaLarive.jpg";
import JomayraHerrera from "images/components/speakers/JomayraHerrera.jpeg";
import JonKalfayan from "images/components/speakers/JonKalfayan.jpeg";
import MichaelCesar from "images/components/speakers/MichaelCesar.jpeg";

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
    speakerName: "Bev Crair",
    image: BevCrair,
    company: "Oracle",
    companyLink: "https://www.oracle.com/",
    linkedin: "https://www.linkedin.com/in/bevcrair/",
    isOpening: true,
  },
  {
    speakerName: "Cynthia Larive",
    image: CynthiaLarive,
    company: "UCSC Chancellor",
    companyLink: "https://chancellor.ucsc.edu/about/",
    linkedin: "https://www.linkedin.com/in/cynthia-larive-83218a8/",
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
    speakerName: "Amanda Robson",
    image: AmandaRobson,
    company: "Cowboy Ventures",
    companyLink: "https://www.cowboy.vc/",
    linkedin: "https://www.linkedin.com/in/amanda-robson-7227685b/",
  },
  {
    speakerName: "Jomayra Herrera",
    image: JomayraHerrera,
    company: "Cowboy Ventures",
    companyLink: "https://www.cowboy.vc/",
    linkedin: "https://www.linkedin.com/in/jomayraherrera/",
  },
  {
    speakerName: "Michael Cesar",
    image: MichaelCesar,
    company: "Duet",
    companyLink: "https://giveduet.org/",
    linkedin: "https://www.linkedin.com/in/cesarmichael/",
  },
];
