import * as React from "react";
import Hero from "views/Home/components/Hero/index.view";
import { ButtonTypes } from "components/Button/index.view";
import Footer from "./components/Footer/index.view";
import EmailSubscriptionForm from "components/EmailSubscription/index.view";
import Navbar from "components/Navbar/index.view";
import MLHBanner from "components/MLHBanner/index.view";
import Background from "components/Background/index.view";
import Mission from "views/Home/components/Mission/index.view";
import "./Home.scss";

const title = [
  {
    text: "CruzHacks 2021 /",
    style: "",
  },
  {
    text: "January 15-17",
    style: "--secondary",
  },
];

const description = [
  {
    description:
      "CruzHacks is the largest hackathon in Santa Cruz. Each year, we invite hundreds of students to develop solutions to real-world problems, pursue inclusion in tech, and kindle the spirit of innovation.  ",
    style: "description",
    line: 0,
  },
  {
    description: "This year, we’re bringing CruzHacks to you.  ",
    style: "description",
    line: 1,
  },
];

const buttonProps = {
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
};

const buttonPropsObject = {
  title: "CruzHacks 2021",
  buttonProps: Object.values(buttonProps),
};

const mission_props = {
  about: {
    title: "We Are CruzHacks",
    body:
      "CruzHacks is a virtual hackathon that provides ground for new ideas and innovation to flourish. By presenting real-world problems, hackers have the chance to begin a project using their creative and problem-solving technical skills. Open to individuals in varying levels of experience, Cruzhacks provides the opportunity to apply the skills learned in classes and connect with companies through the product that has been created.",
  },
  mission: {
    title: "The CruzHacks Mission",
    body:
      "CruzHacks is a global event where people can collaborate, network, and apply technology to solve problems! Our initiative is to expand diversity in tech while facilitating an environment conducive for creating innovative solutions to complex problems. The CruzHacks mission, to support creativity in technology and promote the development solutions for social good, are at the forefront of our efforts every year.",
  },
};

const HomepageView: React.FC = () => {
  return (
    <>
      <Navbar {...buttonPropsObject} />
      <MLHBanner />
      <div className="Homepage">
        <Background />
        <Hero pageName={"Home"} title={title} description={description}>
          <div className="Homepage__emailSubscriptionContainer">
            <EmailSubscriptionForm />
          </div>
        </Hero>
        <Mission
          about_text={mission_props.about}
          mission_text={mission_props.mission}
        />
        <Footer />
      </div>
    </>
  );
};

export default HomepageView;
