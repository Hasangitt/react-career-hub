import { Outlet } from "react-router-dom";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div className="bg-white">
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;