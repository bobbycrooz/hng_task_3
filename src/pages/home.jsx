import menu from "../assets/images/avatar-m.svg";
import menu2 from "../assets/images/share_light.svg";
import slack from "../assets/images/slack.svg";
import git from "../assets/images/git.svg";
import zuri from "../assets/images/zuri.png";
import dp from "../assets/images/bobby.png";
import i4g from "../assets/images/i4g.png";
import tooltip from "../assets/images/tooltip.png";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import { Links } from "../data";
import Transitions from "../Transitions";

const Home = () => {
  const slackname = "bobby dev";

  React.useEffect(() => {
    console.log("home.jslogged");
  }, []);

  const Links = [
    {
      name: "Zuri Team",
      link: "https://training.zuri.team/",
      id: "btn__zuri",
    },
    {
      name: "Zuri Books",
      link: "http://books.zuri.team/",
      id: "books",
      title: "Find books about design and coding here.",
    },

    {
      name: "Python Books",
      link: `https://books.zuri.team/python-for-beginners?ref_id=${slackname}`,
      id: "book__python",
      title: "To feature a book like you want to sell it.",
    },

    {
      name: "Design Books",
      link: "https://books.zuri.team/design-rules",
      id: "book__design",
      title: "click here to pitch the free design book offered by Zuri.",
    },

    {
      name: "Background Check for Coders",
      link: "https://background.zuri.team/",
      id: "pitch",
      title:
        "Click here to pitch a service for doing background checks on coders",
    },
  ];

  let contactDetails = {
    name: "contact",
    link: "/contact",
    id: "contact",
    title: "send a message to me",
  };

  return (
    <Transitions>
      <div className="bg-white px-4 md:px-28 pb-11">
        <div className="absolute right-4 md:right-56 md:hidden top-8">
          <img src={menu} alt="menu icon" />
        </div>

        <div className="absolute share_button right-4 md:right-56 hidden md:flex top-8">
          <div className="relative">
            <img src={menu2} alt="menu icon" />
          </div>
          <div className="tooltip absolute left-0">
            <img src={tooltip} alt="menu icon" />
          </div>
        </div>

        <div className="dp_container mx-auto min-w-[200px] flex items-center flex-col mt-12">
          <div className="dp">
            <img src={dp} id="profile__img" alt="profile" />
          </div>

          <div className="flex space-x-2 my-4 items-center">
            <h1
              id="twitter"
              className="name text-gray-900 font-bold text-lg my-2"
            >
              @idrisloove
            </h1>

            {/*  */}
          </div>

          <h1
            id="slack"
            className="name text-gray-900 font-bold text-lg my-2 hidden"
          >
            bobby dev
          </h1>
        </div>

        <div className="list_container">
          {Links.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 1.02   }}
              animate={{ opacity: 1, scale: 1.0 }}
              whileHover={{ scale: 1.02  }}
              transition={{ delay: index * 0.2 }}
              key={index}
            >
              <a
                title={item.title}
                href={item.link}
                id={item.id}
             
                className="link_card-item bg-gray-200 rounded-lg my-4 flex items-center justify-center p-6"
              >
                <p className="text-[#101828] capitalize font-medium text-sm">
                  {item.name}
                </p>
              </a>
            </motion.div>
          ))}

          <Link
            title={contactDetails.title}
            to={contactDetails.link}
            id={contactDetails.id}
          >
            <button className="link_card-item w-full bg-gray-200 rounded-lg my-4 flex items-center justify-center p-6">
              <p className="text-[#101828] capitalize font-medium text-sm">
                {contactDetails.name}
              </p>
            </button>
          </Link>
        </div>

        <div className="social_media-icon mb-11  p-4 flex justify-center">
          <div>
            <img src={slack} alt="menu icon" />
          </div>

          <div className="ml-4">
            <img src={git} alt="menu icon" />
          </div>
        </div>

        <hr className="w-full my-6 border border-gray-200 " />

        <div className="  mt-11 mb-0 px-4 p-6  md:px-20 footer-images space-y-3 md:space-y-0 md:flex md:justify-between">
          <div>
            <img src={zuri} alt="menu icon" />
          </div>
          {/* <Image src={slack} alt='menu icon'/> */}
          <h1 className="capitalize gray-500 text-sm">
            HNG Internship 9 Frontend Task
          </h1>

          <div>
            <img id="" src={i4g} alt="menu icon" />
          </div>
        </div>
      </div>
    </Transitions>
  );
};

export default Home;
