import React from "react";
import LogoAnimate from "../../src/assets/images/lOGO.svg";

const navArr = ["home", "place to stay", "NFT", "community"];

  // const Links = [
  //   {
  //     name: "Zuri Team",
  //     link: "https://training.zuri.team/",
  //     id: "btn__zuri",
  //   },
  //   {
  //     name: "Zuri Books",
  //     link: "http://books.zuri.team/",
  //     id: "books",
  //     title: "Find books about design and coding here.",
  //   },

  //   {
  //     name: "Python Books",
  //     link: `https://books.zuri.team/python-for-beginners?ref_id=${slackname}`,
  //     id: "book__python",
  //     title: "To feature a book like you want to sell it.",
  //   },

  //   {
  //     name: "Design Books",
  //     link: "https://books.zuri.team/design-rules",
  //     id: "book__design",
  //     title: "click here to pitch the free design book offered by Zuri.",
  //   },

  //   {
  //     name: "Background Check for Coders",
  //     link: "https://background.zuri.team/",
  //     id: "pitch",
  //     title:
  //       "Click here to pitch a service for doing background checks on coders",
  //   },
  // ];

  // let contactDetails = {
  //   name: "contact",
  //   link: "/contact",
  //   id: "contact",
  //   title: "send a message to me",
  // };

const Navbar = () => {
  return (
    <div className="navbar h-[80px] bg-white flex items-center justify-between px-[100px] ">
      <div className="logo-box cursor-pointer">
        <a href="/">
          <img src={LogoAnimate} width={150} height={60} alt="logo" />
        </a>
      </div>

      <div className="nav-list  p-2">
        <ul className="list flex items-center space-x-8">
          {navArr.map((item, index) => (
            <li key={index} className="list-item">
              <p className=" capitalize text-xl ">{item}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="button_box ">
        <button className="btn capitalize">connect wallet</button>
      </div>
    </div>
  );
};

export default Navbar;
