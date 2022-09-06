import type { NextPage } from "next";

import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Quotes from "../components/Quotes";
import Skills from "../components/Skills";
import SocialIcons from "../components/SocialIcons";

const Home: NextPage = () => {
  return (
    <div className="bg-black text-white">
      <Hero />
      <Skills />
      <Quotes />
      <Projects />
      <SocialIcons />
    </div>
  );
};

export default Home;
