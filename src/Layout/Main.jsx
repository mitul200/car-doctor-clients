import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBer from "../Pages/Shared/NavBer/NavBer";

const Main = () => {
    return (
        <div>
            <NavBer/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;