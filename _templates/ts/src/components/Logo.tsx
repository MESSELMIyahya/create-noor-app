import { Component, element, FCRendered } from "@noorjs/core";
import logo from "../noorJs.svg";

function NoorLogo(this: Component): FCRendered {
  element("img", this);
  // styles
  this.styles({
    width: "300px",
  });

  // set the src
  this.set("src", logo);

  return () => null;
}

export default NoorLogo;
