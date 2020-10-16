import React from "react";
import PropTypes from "prop-types";
import "./PostcardStack.scss";

type PostcardStackProps = {
  pageName: string;
};

const PostcardStack: React.FC<PostcardStackProps> = ({ pageName }) => {
  return (
    <div className="PostcardStack">
      Hello from PostcardStack sent from {pageName}
    </div>
  );
};

export default PostcardStack;

PostcardStack.propTypes = {
  pageName: PropTypes.string.isRequired,
};
