import { Navbar } from "@nextui-org/react";
import {
  About,
  Footer,
  Hero,
  Releases,
  Tours,
  WindowMockup,
} from "./components";

export function LandingPage() {
  return (
    <div className="max-w-[1280px] flex items-center justify-center m-auto">
      <div
        // style={applyStyle("bg")}
        className="overflow-hidden shadow-xl rounded-xl border-1 border-solid border-gray-200 w-full"
      >
        <WindowMockup />
        <Navbar />
        <div className="flex flex-col gap-12 mt-8 lg:gap-16">
          <Hero />
          <About />
          <Releases />
          <Tours />
          <Footer />
        </div>
      </div>
    </div>
  );
}
