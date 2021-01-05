import { ReactComponent as FacebookIcon } from "images/components/footer/facebook.svg";
import { ReactComponent as TwitterIcon } from "images/components/footer/twitter.svg";
import { ReactComponent as LinkedInIcon } from "images/components/footer/linkedIn.svg";
import { ReactComponent as InstagramIcon } from "images/components/footer/instagram.svg";
import { ReactComponent as YearIcon } from "images/components/footer/2020.svg";

const SocialMediaEnum = {
  FACEBOOK: "facebook",
  TWITTER: "twitter",
  LINKED_IN: "linkedIn",
  INSTAGRAM: "instagram",
  RETROSPECTIVE: "retrospective",
};

interface SocialMediaProp {
  key: string;
  link: string;
  label: string;
}

export interface FooterProps {
  [index: number]: SocialMediaProp;
}

export function renderIcon(
  key: string
): React.FunctionComponent<React.SVGProps<SVGSVGElement>> {
  if (key === SocialMediaEnum.FACEBOOK) return FacebookIcon;
  else if (key === SocialMediaEnum.TWITTER) return TwitterIcon;
  else if (key === SocialMediaEnum.LINKED_IN) return LinkedInIcon;
  else if (key === SocialMediaEnum.INSTAGRAM) return InstagramIcon;
  else return YearIcon;
}

export const footerProps: SocialMediaProp[] = [
  {
    key: SocialMediaEnum.FACEBOOK,
    link: "https://www.facebook.com/CruzHacks/",
    label: "facebook icon",
  },
  {
    key: SocialMediaEnum.TWITTER,
    link: "https://twitter.com/CruzHacks",
    label: "twitter icon",
  },
  {
    key: SocialMediaEnum.LINKED_IN,
    link: "https://www.linkedin.com/company/santa-cruz-hack/",
    label: "linkedIn icon",
  },
  {
    key: SocialMediaEnum.INSTAGRAM,
    link: "https://www.instagram.com/cruzhacks/",
    label: "instagram icon",
  },
  {
    key: SocialMediaEnum.RETROSPECTIVE,
    link: "https://2020.cruzhacks.com/",
    label: "retrospective icon",
  },
];
