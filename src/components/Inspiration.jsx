import React from "react";
import image0 from "../../src/assets/images/image0.png";
import image1 from "../../src/assets/images/image1.png";
import image2 from "../../src/assets/images/image2.png";
import image3 from "../../src/assets/images/image3.png";
import image4 from "../../src/assets/images/image4.png";
import image5 from "../../src/assets/images/image5.png";
import image6 from "../../src/assets/images/image6.png";
import image7 from "../../src/assets/images/image7.png";
import image9 from "../../src/assets/images/image9.png";
import star from "../../src/assets/images/star.svg";
import { motion } from "framer-motion";


const cardImages = [
  image0,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
];

const Inspiration = () => {
  return (
    <>
      <section className="inspire w-full my-[50px]   bg-white px-2 md:px-[100px]">
        <h1 className="text title-big w-[70%] mx-auto md:w-full text-center">
          Inspiration for your next adventure
        </h1>

        <div className="card_layout   mt-11 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cardImages.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 1.09 }}
              animate={{ opacity: 1, scale: 1.0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="nft_card space-y-3  md:w-[292px] mx-auto"
            >
              <div className="image_box">
                <img src={item} alt="" />
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
      {/*  */}

      <section className="meta_bnb h-[60vh] md:p-[100px]">
        <div className="flex justify-between items-center md:flex-col lg:flex-row  w-full">
          <div className="text_box lg:w-[415px]   space-y-6">
            <hi className="font-bold  text-[48px] ">Metabnb NFTs</hi>

            <p className="font-normal text-lg">
              Discover our NFT gift cards collection. Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs gives our
              cutomer access to loads of our exclusive services.
            </p>

            <button className="bg-white px-6 p-3 text-hng-purple rounded-lg">
              learn more
            </button>
          </div>

          <div className="hidden md:block image_box w-[700px] h-[574px]">
            <img src={image9} alt="" className="hero-image w-full h-full" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Inspiration;
