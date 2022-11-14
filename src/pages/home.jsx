import React from "react";
import { motion } from "framer-motion";
// import { Links } from "../data";
import Transitions from "../Transitions";
import Navbar from "../components/navbar";
import heroImage from "../assets/images/hero-image.png";
import mb from "../assets/images/mbtoken.svg";
import meta from "../assets/images/mask.svg";
import openSea from "../assets/images/sea.svg";
import Inspiration from "../components/Inspiration";
import Footer from "../components/footer";
import Modal from "../components/Modal";
const Home = () => {
  const [showModal, setShowModal] = React.useState(false);
  React.useEffect(() => {
    console.log("home.jslogged");
  }, []);

  const sponsorArr = [mb, meta, openSea];

  return (
    <Transitions>
      <Navbar toggle={setShowModal} />
      {showModal && <Modal toggle={setShowModal} />}

      <div className="home">
        <div className="hero bg-white lg:py-8  py-[50px] w-full p-4 lg:px-[100px] md:p-4">
          <div className="hero_content-wrapper">
            <div className="flex justify-between md:flex-col lg:flex-row  items-center ">
              <motion.div className="text_box text-center md:text-left md:w-[650px] space-y-6">
                <motion.hi
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                  className="text title "
                >
                  Rent a <span className="bold">Place</span> away from{" "}
                  <span className="bold">Home</span> in the{" "}
                  <span className="bold">Metaverse</span>
                </motion.hi>

                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1,
                  }}
                  className="text body md:w-[630px]"
                >
                  we provide you access to luxury and affordable houses in the
                  metaverse, get a chance to turn your imagination to reality at
                  your comfort zone
                </motion.p>

                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1.2,
                  }}
                  className="input_group flex  w-full h-[54px]  rounded-xl"
                >
                  <input
                    type="text"
                    placeholder="Search for location"
                    className="h-full p-4 border rounded-l-xl w-full"
                  />
                  <button className="left_button h-full w-[30%] border border-hng-purple capitalize bg-hng-purple px-6 p-3 rounded-r-xl text-white">
                    search
                  </button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  scale:0.8
                }}
                animate={{
                  opacity: 1,
                  scale:1

                }}
                transition={{
                  duration: 1.4,
                }}
                className="hidden md:block md:my-11 lg:my-0 image_box"
              >
                <img
                  src={heroImage}
                  alt=""
                  className="hero-image w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="sponsor p-4 space-y-3 md:space-y-0 md:h-20 bg-hng-purple w-full flex flex-col md:flex-row items-center justify-around">
          {sponsorArr.map((item, index) => (
            <div key={index} className="sponsor_logo md:w-[179px] w-[40%]">
              <img src={item} alt="" className="hero-image w-full h-full" />
            </div>
          ))}
        </div>

        <Inspiration />
        <Footer />
      </div>
    </Transitions>
  );
};

export default Home;
