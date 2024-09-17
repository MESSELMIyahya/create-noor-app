import { Component, element, FCRendered } from "@noorjs/core";
import Button from "./Button";

// counter component
function Counter(this: Component): FCRendered {
  element("div", this);
  // counter state
  const [getState, setState, counterRef] = this.state(0);

  // function to increase the counter state
  const increase = () => {
    setState((e) => e + 1);
  };

  // rerender the component when the counter state is changed using the counter state ref
  this.onChange(() => {
    // rerender the component
    this.render();
  }, [counterRef]);

  return () => (
    <div>
      <Button
        size="lg"
        className="text-lg"
        text={"Counter is " + getState()}
        onClick={increase}
      />
    </div>
  );
}

export default Counter;
