import React from "react";
import "./PostcardStack.scss";

import "./postcards";
import postcards from "./postcards";

interface PostcardStackProps {
  pageName: string;
  postcardNest?: {
    [selector: string]: Record<string, SVGSVGElement>;
  }
}

const PostcardStack: React.FC<PostcardStackProps> = ({
  pageName, {postcards},
}: PostcardStackProps) => {
  return (
    <div className="PostcardStack">
      <img
        className="PostcardStack__card"
        src={postcards[pageName.toLowerCase()]}
        alt="Driving up the winding road to campus"
      ></img>
    </div>
  );
};

export default PostcardStack;
