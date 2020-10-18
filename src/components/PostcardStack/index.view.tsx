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
      Hello from PostcardStack sent from {pageName}
    </div>
  );
};

export default PostcardStack;
