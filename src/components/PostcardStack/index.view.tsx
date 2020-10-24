import React from "react";
import "./PostcardStack.scss";

interface PostcardStackProps {
  pageName: string;
}

const PostcardStack: React.FC<PostcardStackProps> = ({
  pageName,
}: PostcardStackProps) => {
  return (
    <div className="PostcardStack">
      <img
        src={require(`../../images/postcards/${pageName.toLowerCase()}.svg`)}
        className="PostcardStack__postcard"
        alt="The winding road to the UCSC campus."
      />
    </div>
  );
};

export default PostcardStack;
