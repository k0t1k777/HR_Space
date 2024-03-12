import "./App.css";
import BigPictureContainer from "../BigPictureContainer/BigPictureContainer";
import Sidebar from "../Sidebar/Sidebar";
// import { Route, Routes } from "react-router-dom";
// import Description from "../Description/Description";

const AppRouter: React.FC = () => {
  return (
    <main className="main">
      {/* <Header /> */}
         <BigPictureContainer />
        <Sidebar />
        {/* <>
      </Routes>
      
       <Routes>
        <Route  path={'/description'} component={Description }></Route>
        <Route  path={'/notice'} component={Sidebar }></Route>
         </Routes> 
      </> */}
    </main>
  );
};

export default AppRouter;
