import { Component, element, FCRendered } from "@noorjs/core";
import HeroSection from "./components/Hero";
import Counter from "./components/Counter";

function App(this: Component): FCRendered {
  element("main", this);
  // styles
  this.set(
    "className",
    "w-full h-screen bg-gradient-to-tl from-primary/20 via-primary/30 to-primary/20"
  );

  return () => (
    <div className="container mx-auto flex flex-col gap-12 items-center">
      {/* hero section */}
      <HeroSection />
      {/* counter */}
      <Counter />
    </div>
  );
}

export default App;
