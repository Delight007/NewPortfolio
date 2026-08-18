"use client";
import { useState } from "react";
import About from "./Components/About/About";
import ContactMe from "./Components/ContactMe/contact";
import GlobalProvider from "./Components/context/GlobalContext";
import Experience from "./Components/Experience/experience";
import Footer from "./Components/Footer/foot";
import Hero from "./Components/hero/heroo";
import Nav from "./Components/Navbar/Nav";
import Projects from "./Components/Projects/work";
import Services from "./Components/Service/service";
// import Projects from "./Components/Project/project";
import Skills from "./Components/skill/Skills";
import SplashScreen from "./Components/SplashScreen/SplashScreen";
import PortfolioChatbot from "./Components/ui/chatbot";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <GlobalProvider>
      {isLoading && <SplashScreen onComplete={() => setIsLoading(false)} />}

      <div className="min-h-screen font-inter transition-colors duration-300 flex flex-col justify-center items-center">
        <Nav />

        <div className="mx-auto w-full relative  2xl:px-0 ">
          <Hero />
          <About />
          <Experience />
          <Services />
          <Projects />
          <Skills />
          <ContactMe />
          <Footer />
          <div className="fixed bottom-6 right-6 z-[100]">
            <PortfolioChatbot />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
