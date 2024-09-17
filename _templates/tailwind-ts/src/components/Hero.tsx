import { Component, element, FCRendered } from "@noorjs/core";
import NoorLogo from "./Logo";

function HeroSection(this: Component): FCRendered {
  element("section", this);

  return () => (
    <div className="w-full flex flex-col items-center pt-24 px-6 gap-12">
      {/* logo */}
      <NoorLogo />
      {/* content */}
      <div className="w-full md:w-[80%] flex flex-col gap-3 p-8 bg-white/70 border border-red-900/20 shadow-sm rounded-3xl">
        <p className="text-lg font-[500] text-neutral-900/75">
          - Welcome to <span className="text-primary">NoorJs</span>, a
          lightweight UI JavaScript framework designed to help you build fast,
          efficient, and scalable applications. NoorJs is built around the
          concept of First-Time-Rendering, which means your component is
          rendered once at the start and won't be re-rendered unless you
          explicitly choose to.
        </p>
        <p className="text-lg font-[500] text-neutral-900/75">
          - To learn <span className="text-primary">NoorJs</span> visit the{" "}
          <a
            className="text-primary transition-colors hover:text-primary/50"
            href="https://github.com/MESSELMIyahya/NoorJs/blob/main/docs/doc.md"
          >
            documentation
          </a>
          .
        </p>
        <p className="text-lg font-[500] text-neutral-900/75">
          - This library is still under development and{" "}
          <span className="text-secondary">NOT PRODUCTION READY</span> ,if you
          find an <span className="text-secondary">issue</span> or want to{" "}
          <a
            className="text-primary transition-colors hover:text-primary/50"
            href="https://github.com/MESSELMIyahya/NoorJs/blob/main/CONTRIBUTING.md"
          >
            contribute
          </a>{" "}
          we'll so happy.
        </p>
        <p className="text-lg font-[500] text-neutral-900/75">
          - This is project is created and have bing developed by{" "}
          <a
            href="https://www.yahyamesselmi.com"
            className="text-primary transition-colors hover:text-primary/50"
          >
            Yahya Messelmi
          </a>{" "}
          and for more information visit the{" "}
          <a
            href="https://github.com/MESSELMIyahya/NoorJs"
            className="text-primary transition-colors hover:text-primary/50"
          >
            Github repository
          </a>
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
