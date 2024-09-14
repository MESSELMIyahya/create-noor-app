import { Component, element, FCRendered } from "@noorjs/core";

function App(this: Component): FCRendered {
  element("div", this);

  return () => (
    <div>
      <h2 className="text-red-500">
        Hello NoorJs
      </h2>
    </div>
  );
}

export default App;
