import { element } from "@noorjs/core";
import logo from "../noorJs.svg";

/**
 * @this { import('@noorjs/core').Component }
 */

function NoorLogo() {
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
