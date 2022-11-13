import React from "react";
import LogoAnimate from "../../src/assets/images/lOGO.svg";
import image0 from "../../src/assets/images/image0.png";
import image1 from "../../src/assets/images/image1.png";
import image2 from "../../src/assets/images/image2.png";
import image3 from "../../src/assets/images/image3.png";
import image4 from "../../src/assets/images/image4.png";
import image5 from "../../src/assets/images/image5.png";
import image6 from "../../src/assets/images/image6.png";
import image7 from "../../src/assets/images/image7.png";
import image8 from "../../src/assets/images/image8.png";
import image9 from "../../src/assets/images/image9.png";
import star from "../../src/assets/images/star.svg";

const navArr = ["home", "place to stay", "NFT", "community"];
const cardImages = [
  image0,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  // image8,
];

const Inspiration = () => {
  return (
    <>
      <section className="inspire w-full my-[50px]  bg-white px-[100px]">
        <h1 className="text title-big w-full text-center">
          Inspiration for your next adventure
        </h1>

        <div className="card_layout  mt-11 grid grid-cols-4 gap-4">
          {cardImages.map((item, index) => (
            <div className="nft_card space-y-3">
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
            </div>
          ))}
        </div>
      </section>

      <section className="meta_bnb flex items-center justify-between  text-white">
        <div className="flex justify-between items-center  w-full">
          <div className="text_box w-[415px]  space-y-6">
            <hi className="font-bold  text-[48px] ">
            Metabnb NFTs
            </hi>

            <p className="font-normal text-lg">
              Discover our NFT gift cards collection. Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs gives our
              cutomer access to loads of our exclusive services.
            </p>

            <button className="bg-white px-6 p-3 text-hng-purple rounded-lg">
              learn more
            </button>
          </div>

          <div className="image_box w-[700px] h-[574px]">
            <img src={image9} alt="" className="hero-image w-full h-full" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Inspiration;
