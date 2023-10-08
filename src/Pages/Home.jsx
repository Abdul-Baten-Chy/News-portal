import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Leftbar from "../Shared/Leftbar/Leftbar";
import Rightbar from "../Shared/Rightbar/Rightbar";
import Navbar from "../Shared/navbar/Navbar";
import BreakingNews from "./BreakingNews";
import Card from "./Card";


const Home = () => {
const news = useLoaderData();


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
                    {
                        news.map(item => <Card key={item._id} newsItem={item}></Card>)
                    }
                </div>
                <div className="border">
                    <Rightbar></Rightbar>
                </div>
            </div>
        </div>
    );
};

export default Home;