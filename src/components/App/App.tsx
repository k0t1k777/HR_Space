import "./App.css";
import BigPictureContainer from "../BigPictureContainer/BigPictureContainer";
import Sidebar from "../Sidebar/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Сandidate from "../Сandidate/Сandidate";
import Сooperation from "../Сooperation/Сooperation";
import Description from "../Description/Description";
import Requirement from "../Requirement/Requirement";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <main className="main">
        {/* <Header /> */}
        <BigPictureContainer />
        <Sidebar />
          <Routes>
            <Route path="/description" element={<Description />} />
            <Route path="/equirement" element={<Requirement />} />
            <Route path="/conditions-for-candidate" element={<Сandidate />} />
            <Route path="/conditions-for-cooperation" element={<Сooperation />} />
          </Routes>
      </main>
    </BrowserRouter>
  );
};

export default AppRouter;
