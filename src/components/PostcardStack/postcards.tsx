import React, { SVGProps } from "react";
import { ReactComponent as Home } from "./home.svg";

const postcards: Record<string, React.FC<SVGProps<SVGSVGElement>>> = {
  home: Home,
};

export default postcards;
