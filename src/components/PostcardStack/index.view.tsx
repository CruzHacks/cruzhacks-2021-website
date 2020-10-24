import React from "react";
import "./PostcardStack.scss";
import postcards from "./postcards";

interface PostcardStackProps {
  pageName: string;
}

const PostcardStack: React.FC<PostcardStackProps> = ({
  pageName,
}: PostcardStackProps) => {
  return <div className="PostcardStack">{postcards[pageName]}</div>;
};

export default PostcardStack;
