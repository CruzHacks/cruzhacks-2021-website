import React from "react";
import "./PostcardStack.scss";

interface PostcardStackProps {
  pageName: string;
}

interface Postcard {
  name: string;
  image: string;
  altText: string;
}

const postcards: Postcard[] = [
  {
    name: "Home",
    image: require("images/postcards/home.svg"),
    altText: "The winding road to the UCSC campus.",
  },
  {
    name: "Information",
    image: require("images/postcards/home.svg"),
    altText: "The winding road to the UCSC campus.",
  },
];
const PostcardStack: React.FC<PostcardStackProps> = ({
  pageName,
}: PostcardStackProps) => {
  return (
    <div className="PostcardStack">
      {postcards
        .filter((item) => item.name === pageName)
        .map(({ name, image, altText }) => (
          <img
            src={image}
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
