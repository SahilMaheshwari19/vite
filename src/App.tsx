import { useState } from "react";
import "./App.css";
import "./index.css";
import Navbar from "@/scenes/navbar";
import { SelectedPage } from "./shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  return (
    <>
      <div className="app bg-gray-50">
        <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      </div>
    </>
  );
}

export default App;
