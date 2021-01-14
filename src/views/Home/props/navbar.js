import { ButtonTypes } from "components/Button/index.view";

export const navbarProps = {
  title: "CruzHacks 2021",
  buttonProps: Object.values({
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
