import React from "react";
import { motion } from "framer-motion";
// import { Links } from "../data";
import Transitions from "../Transitions";
import Navbar from "../components/navbar";
import fil from "../assets/images/filter.svg";

import Footer from "../components/footer";
import Modal from "../components/Modal";
import image0 from "../../src/assets/images/image0.png";
import image1 from "../../src/assets/images/image1.png";
import image2 from "../../src/assets/images/image2.png";
import image3 from "../../src/assets/images/image3.png";
import image4 from "../../src/assets/images/image4.png";
import image5 from "../../src/assets/images/image5.png";
import image6 from "../../src/assets/images/image6.png";
import image7 from "../../src/assets/images/image7.png";
import image8 from "../../src/assets/images/image8.png";
import image11 from "../../src/assets/images/image11.png";
import image12 from "../../src/assets/images/image12.png";
import image13 from "../../src/assets/images/image13.png";
import image14 from "../../src/assets/images/image14.png";
import image15 from "../../src/assets/images/image15.png";
import image16 from "../../src/assets/images/image16.png";
import image17 from "../../src/assets/images/image17.png";
import star from "../../src/assets/images/star.svg";

const cardImages = [
  image0,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
];

const Place = () => {
  const [showModal, setShowModal] = React.useState(false);
  React.useEffect(() => {
    console.log("home.jslogged");
  }, []);

  const filter = [
    "Resturant",
    "Cottage",
    "Castle",
    "fantast city",
    "beach",
    "Carbins",
    "Off-grid",
    "Farm",
  ];

  return (
    <Transitions>
      <Navbar toggle={setShowModal} />
      {showModal && <Modal toggle={setShowModal} />}
      <div className="home">
        <div className="md:px-[100px] my-11 w-full hidden lg:flex">
          <div className="flex middle justify-between w-full  bg-white p-4  text-[#333333]">
            {filter.map((item, index) => (
              <div key={index} className="item p-2 px-4 ">
                <h1 className="w-full  text-xl">{item}</h1>
              </div>
            ))}

            <div className="filter_btb border rounded-xl p-2 px-4 middle">
              <h1 className="bold text-[16px]">Location</h1>
              <div className="icon ml-6 ">
                <img src={fil} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-gray-200 p-4 border lg:hidden">
          <select name="filter" id="" className="filters p-2 capitalize">
            {filter.map((item, index) => (
              <option value="locaation" key={index}>
                <div className="item p-2 px-4 ">
                  <h1 className="w-full   text-xl">{item}</h1>
                </div>
              </option>
            ))}
          </select>
        </div>

        <section className="inspire w-full my-[50px]  bg-white md:px-[100px]">
          <div className="card_layout sm:grid-cols-2  mt-11 grid grid-cols-1 lg:grid-cols-4 gap-4">
            {cardImages.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 1.09 }}
                animate={{ opacity: 1, scale: 1.0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="nft_card space-y-3   md:w-[292px] mx-auto"
              >
                <div className="image_box">
                  <img src={item} alt="" className="w-full h-full" />
                </div>

                <div className="name_one flex justify-between items-center capitalize">
                  <h1 className="text body-small">Desert king</h1>
                  <h1 className="text body-small bold">1MBT per night</h1>
                </div>

                <div className="name_one flex  justify-between items-center capitalize">
                  <h1 className="text body-small">2345km away</h1>
                  <h1 className="text body-small">available for 2weeks stay</h1>
                </div>

                <div className="star flex ">
                  <img src={star} alt="" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        <Footer />
      </div>
    </Transitions>
  );
};

export default Place;
