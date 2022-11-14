import React from "react";
import tiger from "../../src/assets/images/tiger.svg";
import wallcon from "../../src/assets/images/wallcon.svg";
import close from "../../src/assets/images/times.svg";


const Modal = ({ toggle }) => {
  return (
    <div className="modal p-6 md:p-0 centered bg-[#000000a2] fixed top-0 left-0 w-full h-full">
      <div className="modal_card rounded-lg bg-white w-[500px] h-auto fadeIn">
        <div className="header middle justify-between  rounded-t-lg  p-6 border-b">
          <h1 className="font-bold text-2xl ">Connect Wallet</h1>
          <div
            role={"button"}
            onClick={() => toggle((p) => !p)}
            className="icon cursor-pointer"
          >
            <img src={close} alt="" />
          </div>
        </div>
        <div className="body w-full p-6 py-9 rounded-b-lg space-y-3">
          <h1 className="text-[#333333]">Choose your preferred wallet:</h1>
          {/*  */}
          <div className="border p-3 middle justify-between rounded-xl">
            <div className="middle">
              <img src={tiger} alt="" />
              <h1 className="font-bold ml-3">Metamask</h1>
            </div>

            <div className="icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.3838 10C14.3838 10.2689 14.2812 10.5377 14.0763 10.7426L7.62657 17.1923C7.21628 17.6026 6.55108 17.6026 6.14096 17.1923C5.73084 16.7822 5.73084 16.1171 6.14096 15.7068L11.8481 10L6.14116 4.29324C5.73104 3.88295 5.73104 3.21795 6.14116 2.80786C6.55128 2.39738 7.21648 2.39738 7.62677 2.80786L14.0765 9.25744C14.2814 9.4625 14.3838 9.73129 14.3838 10Z"
                  fill="#959DA6"
                />
              </svg>
            </div>
          </div>
          {/*  */}
          <div className="border p-3 middle justify-between rounded-xl">
            <div className="middle">
              <img src={wallcon} alt="" />
              <h1 className="font-bold ml-3">WalletConnect</h1>
            </div>

            <div className="icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.3838 10C14.3838 10.2689 14.2812 10.5377 14.0763 10.7426L7.62657 17.1923C7.21628 17.6026 6.55108 17.6026 6.14096 17.1923C5.73084 16.7822 5.73084 16.1171 6.14096 15.7068L11.8481 10L6.14116 4.29324C5.73104 3.88295 5.73104 3.21795 6.14116 2.80786C6.55128 2.39738 7.21648 2.39738 7.62677 2.80786L14.0765 9.25744C14.2814 9.4625 14.3838 9.73129 14.3838 10Z"
                  fill="#959DA6"
                />
              </svg>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
