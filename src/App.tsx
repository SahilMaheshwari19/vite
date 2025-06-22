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

// function App() {
//   return (
//     <div className="text-3xl font-bold text-center mt-10 text-blue-600">
//       Hello Vite + React + Tailwind!
//     </div>
//   );
// }

// export default App;
