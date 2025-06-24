import { useEffect, useState } from "react";
// import "./App.css";
import "./index.css";
import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import { SelectedPage } from "./shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
      window.addEventListener("scroll", handleScroll);
      // UNMOUNTING THE FUNCTION TO AVOID ANY MEMORY LEAK OR BUGS
      return () => window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      {/* <div className="app bg-gray-50">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Home setSelectedPage={setSelectedPage} />
      </div> */}
      <p className="text-primary-500 text-2xl font-bold">
        This should be RED now!
      </p>
    </>
  );
}

export default App;
