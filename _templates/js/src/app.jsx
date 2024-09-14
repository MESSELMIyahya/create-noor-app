import { element } from "@noorjs/core";

/**
  * @this { import('@noorjs/core').Component } 
*/
function App()  {
  element("div", this);


  return () => (
    <div>
      <h2
        style={{
          color: "red",
        }}
      >
        Hello NoorJs
      </h2>
    </div>
  );
}

export default App;
