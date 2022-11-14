import React from "react";
import LogoAnimate from "../../src/assets/images/LogoWhite.svg";
import fb from "../../src/assets/images/facebook.svg";
import tw from "../../src/assets/images/tweet.svg";
import ins from "../../src/assets/images/insta.svg";

const Footer = () => {
  return (
    <div className="footer md:h-[322px] bg-black p-6 md:p-[100px] ">
      <div className="flex space-y-6 md:space-y-0 flex-col md:flex-row items-start justify-between">
        <div className="logo  h-40  flex flex-col items-start justify-between">
          <img src={LogoAnimate} alt="" />

          <div className="space-y-3">
            <div className="socials flex items-center space-x-4">
              <img src={fb} alt="" />
              <img src={tw} alt="" />
              <img src={ins} alt="" />
            </div>

            <div className="flex items-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 1.5C13.14 1.5 16.5 4.86 16.5 9C16.5 13.14 13.14 16.5 9 16.5C4.86 16.5 1.5 13.14 1.5 9C1.5 4.86 4.86 1.5 9 1.5ZM9 3C5.685 3 3 5.685 3 9C3 12.315 5.685 15 9 15C12.315 15 15 12.315 15 9C15 5.685 12.315 3 9 3ZM9 5.25C10.365 5.25 11.5598 5.97975 12.216 7.071L10.9305 7.84275C10.7282 7.50543 10.441 7.22704 10.0975 7.03533C9.7541 6.84363 9.36639 6.74531 8.97309 6.75017C8.57979 6.75504 8.19463 6.86292 7.85603 7.06307C7.51742 7.26321 7.2372 7.54862 7.0433 7.89084C6.84941 8.23306 6.74861 8.62013 6.75096 9.01346C6.75331 9.40678 6.85873 9.79262 7.05671 10.1325C7.25469 10.4724 7.5383 10.7544 7.87928 10.9505C8.22025 11.1466 8.60667 11.2498 9 11.25C9.3886 11.2503 9.77063 11.1498 10.1088 10.9584C10.447 10.767 10.7299 10.4913 10.9297 10.158L12.216 10.929C11.7945 11.633 11.1537 12.1792 10.3919 12.484C9.63015 12.7888 8.78941 12.8353 7.99867 12.6163C7.20793 12.3973 6.51086 11.925 6.01435 11.2718C5.51785 10.6186 5.24934 9.8205 5.25 9C5.25 6.93 6.93 5.25 9 5.25Z"
                  fill="#F7F7F7"
                />
              </svg>
              <h1 className="text-white ml-2">2022 Metabnb</h1>
            </div>
          </div>
        </div>

        <div className="list_Box capitalize space-y-3 ">
          <h1 className="text-white font-bold text-lg">Community</h1>
          <ul className="footer">
            <li className="list">NFT</li>
            <li className="list">token</li>
            <li className="list">LandBoard</li>
            <li className="list">discord</li>
          </ul>
        </div>

        <div className="list_Box capitalize space-y-3 ">
          <h1 className="text-white font-bold text-lg">Places</h1>
          <ul className="footer">
            <li className="list">Castle</li>
            <li className="list">Farms</li>
            <li className="list">Beach</li>
            <li className="list">Learn more</li>
          </ul>
        </div>

        <div className="list_Box capitalize space-y-3 ">
          <h1 className="text-white font-bold text-lg">About Us</h1>
          <ul className="footer">
            <li className="list">Road map</li>
            <li className="list">Creators</li>
            <li className="list">Career</li>
            <li className="list">Contact us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
