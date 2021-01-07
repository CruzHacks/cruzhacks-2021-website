import { ButtonTypes } from "components/Button/index.view";

export const navbarProps = {
  title: "CruzHacks 2021",
  buttonProps: Object.values({
    hacker: {
      text: "Apply to hack!",
      link: "https://bit.ly/cruzhacks-2021-hacker",
      label: "hacker sign-up button",
      type: ButtonTypes.PRIMARY,
    },
    judge_mentor: {
      text: "Be a judge / mentor!",
      link:
        "https://docs.google.com/forms/d/e/1FAIpQLScVmW-gIcKGrp7fBVeH5i8G1VQ83IwmKrkIo_J2PeRj3PRYTw/viewform",
      label: "judge/mentor sign-up button",
      type: ButtonTypes.PRIMARY,
    },
    sponsor: {
      text: "Be a sponsor!",
      link:
        "https://drive.google.com/file/d/127G6lE1SFVQUeC3wSMdMwn12E9sVFCyU/view",
      label: "sponsor sign-up button",
      type: ButtonTypes.PRIMARY,
    },
    code_conduct: {
      text: "Our Code of Conduct",
      link: "http://mlh.io/code-of-conduct",
      label: "mlh code of conduct",
      type: ButtonTypes.SECONDARY,
    },
    contact_us: {
      text: "Contact Us",
      link: "mailto:contact@cruzhacks.com",
      label: "contact us",
      type: ButtonTypes.SECONDARY,
    },
  }),
};
