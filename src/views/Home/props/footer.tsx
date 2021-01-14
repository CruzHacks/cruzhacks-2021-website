import FacebookIcon from "images/components/footer/facebook.svg";
import TwitterIcon from "images/components/footer/twitter.svg";
import LinkedInIcon from "images/components/footer/linkedIn.svg";
import InstagramIcon from "images/components/footer/instagram.svg";
import YearIcon from "images/components/footer/2020.svg";
export interface SocialMediaProp {
  icon: string;
  link: string;
  label: string;
}

export const footerProps: SocialMediaProp[] = [
  {
    icon: FacebookIcon,
    link: "https://www.facebook.com/CruzHacks/",
    label: "facebook icon",
  },
  {
    icon: TwitterIcon,
    link: "https://twitter.com/CruzHacks",
    label: "twitter icon",
  },
  {
    icon: LinkedInIcon,
    link: "https://www.linkedin.com/company/santa-cruz-hack/",
    label: "linkedIn icon",
  },
  {
    icon: InstagramIcon,
    link: "https://www.instagram.com/cruzhacks/",
    label: "instagram icon",
  },
  {
    icon: YearIcon,
    link: "https://2020.cruzhacks.com/",
    label: "retrospective icon",
  },
];
