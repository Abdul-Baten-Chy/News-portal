import Header from "../Shared/Header/Header";
import Leftbar from "../Shared/Leftbar/Leftbar";
import Rightbar from "../Shared/Rightbar/Rightbar";
import Navbar from "../Shared/navbar/Navbar";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 gap-5">
                <div className="border">
                    <Leftbar></Leftbar>
                </div>
                <div className="col-span-2 border">
                    <h2>Comming soon</h2>
                </div>
                <div className="border">
                    <Rightbar></Rightbar>
                </div>
            </div>
        </div>
    );
};

export default Home;