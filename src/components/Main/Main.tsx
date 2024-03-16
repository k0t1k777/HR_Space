import "./Main.css";
//import Sidebar from "../Main/Sidebar/Sidebar"; delete SideBar
// BrowserRouter moved in main.tsx
import { Route, Routes } from "react-router-dom";
import BigPictureContainer from "../BigPictureContainer/BigPictureContainer"; 
import Сandidate from "../Main/Сandidate/Сandidate";
import Сooperation from "../Main/Сooperation/Сooperation";
import Description from "../Main/Description/Description";
import Requirement from "../Main/Requirement/Requirement";

export default function Main() {
  return (
    <main className="main">
      <BigPictureContainer />
      <Routes>
        <Route path="/description" element={<Description />} />
        <Route path="/equirement" element={<Requirement />} />
        <Route path="/conditions-for-candidate" element={<Сandidate />} />
        <Route path="/conditions-for-cooperation" element={<Сooperation />} />
      </Routes>
    </main>
  );
}
