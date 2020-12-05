import * as React from "react";
import Mission from "views/Home/components/Mission/index.view";
import MLHBanner from "components/MLHBanner/index.view";
import "./Home.scss";

const mission_text = {
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
      <MLHBanner />
      <div className="Homepage">
        <Mission
          about_text={mission_text.about}
          mission_text={mission_text.mission}
        />
      </div>
    </>
  );
};

export default HomepageView;
