import { element } from "@noorjs/core";

/**
 * @this { import('@noorjs/core').Component }
 */
function App() {
  element("div", this);

  return () => (
    <div>
      <h2 className="text-red-500 text-4xl">Hello NoorJs</h2>
    </div>
  );
}

export default App;
