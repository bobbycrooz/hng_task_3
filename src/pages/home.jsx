import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import { Links } from "../data";
import Transitions from "../Transitions";
import Navbar from "../components/navbar";
import heroImage from "../assets/images/hero-image.png";
import mb from "../assets/images/mbtoken.svg";
import meta from "../assets/images/mask.svg";
import openSea from "../assets/images/sea.svg";
import Inspiration from "../components/Inspiration";
import Footer from "../components/footer";
const Home = () => {
  const slackname = "bobby dev";

  React.useEffect(() => {
    console.log("home.jslogged");
  }, []);

  const sponsorArr = [mb, meta, openSea];

  return (
    <Transitions>
      <Navbar />
      <div className="home">
        <div className="hero bg-white py-8  w-full px-[100px] p-4">
          <div className="hero_content-wrapper">
            <div className="flex justify-between items-center ">
              <div className="text_box  space-y-6">
                <hi className="text title ">
                  Rent a <span className="bold">Place</span> away from{" "}
                  <span className="bold">Home</span> in the{" "}
                  <span className="bold">Metaverse</span>
                </hi>

                <p className="text body w-[630px]">
                  we provide you access to luxury and affordable houses in the
                  metaverse, get a chance to turn your imagination to reality at
                  your comfort zone
                </p>

                <div className="input_group flex  w-full h-[54px]  rounded-xl">
                  <input
                    type="text"
                    placeholder="Search for location"
                    className="h-full p-4 border rounded-l-xl w-full"
                  />
                  <button className="left_button h-full w-[30%] border border-hng-purple capitalize bg-hng-purple px-6 p-3 rounded-r-xl text-white">
                    search
                  </button>
                </div>
              </div>

              <div className="image_box">
                <img
                  src={heroImage}
                  alt=""
                  className="hero-image w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="sponsors h-20 bg-hng-purple w-full flex items-center justify-around">
          {sponsorArr.map((item, index) => (
            <div key={index} className="sponsor_logo ">
              <img
                src={item}
                alt=""
                className="hero-image w-full h-full"
              />
            </div>
          ))}
        </div>

        <Inspiration/>
        <Footer/>
      </div>
    </Transitions>
  );
};

export default Home;
