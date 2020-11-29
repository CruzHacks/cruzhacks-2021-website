/* eslint-disable @typescript-eslint/no-var-requires */
import * as React from "react";
import "./PostcardStack.scss";

interface PostcardStackProps {
  pageName: string;
}

interface Postcard {
  name: string;
  altText: string;
}

const postcards: Postcard[] = [
  {
    name: "Home",
    altText: "The winding road to the UCSC campus.",
  },
  {
    name: "Information",
    altText: "Information Alt Text Here.",
  },
];
const PostcardStack: React.FC<PostcardStackProps> = ({
  pageName,
}: PostcardStackProps) => {
  return (
    <div className="PostcardStack">
      {postcards
        .filter((item) => item.name === pageName)
        .map(({ name, altText }) => (
          <img
            src={require(`images/postcards/${name.toLowerCase()}.svg`).default}
            className="PostcardStack__postcard"
            alt={altText}
            key={name}
            id={`${name}-postcard`}
          />
        ))}
    </div>
  );
};

export default PostcardStack;
