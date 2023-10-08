import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Shared/navbar/Navbar";

const Details = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const information = data.find((item) => item._id == id);
  const { image_url, details, title, author } = information;
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="hero min-h-screen"
        style={{
            backgroundImage: `url(${image_url})`,
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
      </div>
      {/* <img src={image_url} alt="" /> */}
      <h3 className="text-3xl font-bold my-5 ">{title}</h3>
      <div className="w-20 h-20 flex gap-7 items-center">
        <img className="rounded-full" src={author.img} alt="" />
        <p className="text-xl font-bold">{author.name}</p>
      </div>
      <p>{details}</p>
    </div>
  );
};

export default Details;
