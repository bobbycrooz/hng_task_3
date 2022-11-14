import React from "react";
import LogoAnimate from "../../src/assets/images/lOGO.svg";
import close from "../../src/assets/images/times.svg";

const navArr = ["home", "place to stay", "NFT", "community"];

const Navbar = ({ toggle }) => {
  const [mobileMenu, setMobileMenul] = React.useState(false);

  return (
    <div className="navbar h-[80px]  bg-white flex items-center justify-between px-4 md:px-[100px] ">
      <div className="logo-box cursor-pointer">
        <a href="/">
          <img src={LogoAnimate} width={150} height={60} alt="logo" />
        </a>
      </div>

      <div className="nav-list hidden lg:block  p-4">
        <ul className="list flex items-center space-x-8">
          {navArr.map((item, index) => (
            <a
              key={index}
              href={index === 1 ? "/place" : "/"}
              className="links"
            >
              <li className="list-item">
                <p className=" capitalize text-xl ">{item}</p>
              </li>
            </a>
          ))}
        </ul>
      </div>

      <div className="button_box hidden lg:block">
        <button onClick={() => toggle((p) => !p)} className="btn capitalize">
          connect wallet
        </button>
      </div>

      <div
        role="button"
        title="menu"
        onClick={() => setMobileMenul((p) => !p)}
        className="hamburger lg:hidden"
      >
        <div className="icon p-1 w-9  border-2 hover:shadow-sm cursor-pointer space-y-1">
          <div className="w-full h-1 bg-gray-400 rounded-xl"></div>
          <div className="w-full h-1 bg-gray-400 rounded-xl"></div>
          <div className="w-full h-1 bg-gray-400 rounded-xl"></div>
        </div>
      </div>

      {mobileMenu && (
        <div className="mobile-menu lg:hidden  strictFadeIn h-full  w-full fixed left-0 top-0 bg-[#000000a2]">
          <div className="menu_card h-screen w-[70%] bg-white p-4">
            <div className="close flex middle justify-between">
              <span></span>
              <div
                role="button"
                title="close"
                onClick={() => setMobileMenul((p) => !p)}
                className="times border p-2 rounded-lg"
              >
                <img src={close} alt="" />
              </div>
            </div>

            <ul className="list flex flex-col space-y-8 my-11">
              {navArr.map((item, index) => (
                <a
                  key={index}
                  href={index === 1 ? "/place" : "/"}
                  className="links"
                >
                  <li className="list-item">
                    <p className=" capitalize text-xl ">{item}</p>
                  </li>
                </a>
              ))}
            </ul>
            <hr />
            <div className="button_box">
              <button
                onClick={() => toggle((p) => !p)}
                className="btn capitalize my-4"
              >
                connect wallet
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
