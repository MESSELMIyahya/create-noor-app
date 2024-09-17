import { Component, element, FCRendered } from "@noorjs/core";
import { twMerge } from "tailwind-merge";

interface Props {
  text: string;
  variate?: "primary" | "outline";
  size?: "sm" | "lg" | "icon";
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

function Button(
  this: Component,
  {
    onClick,
    text = "",
    disabled = false,
    className: cn,
    size = "sm",
    variate = "primary",
  }: Props
): FCRendered {
  element("button", this);

  const className = twMerge(
    "inline-flex items-center justify-center whitespace-nowrap select-none rounded-full text-sm font-medium transition-all active:transition-all ring-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    //  variates
    variate == "primary"
      ? "bg-primary text-white hover:bg-primary/80"
      : "bg-white border-secondary/30 border text-secondary hover:bg-white/80",
    //   sizes
    size == "sm"
      ? "h-10 px-4 py-2"
      : size == "lg"
      ? "h-12 px-5 py-2"
      : size == "icon"
      ? "size-9"
      : "h-9 rounded-full px-3",
    // custom
    cn
  );

  // add styles
  this.set("className", className);

  //   add props
  this.set("disabled", disabled);

  //   click event
  if (onClick) {
    this.setEvent("onClick", onClick);
  }

  return () => text;
}

export default Button;
