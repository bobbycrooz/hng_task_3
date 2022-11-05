import React from "react";
import Transitions from "../Transitions";
import zuri from "../assets/images/zuri.png";
import i4g from "../assets/images/i4g.png";
import { Link } from "react-router-dom";


const ContactPage = () => {
  // const location = useLocation();

  React.useEffect(() => {
    console.log("contact.jslogged");
  }, []);

  const [error, setError] = React.useState(true)

  // const transObj = {
  //   initial: { opacity: 0, x: 0 },
  //   animate: { opacity: 1, x: 20 },
  //   exit: { opacity: 0, x: 0 },
  // };
  function isValid(){
    setError(false)
  }

  return (
    <Transitions>
      <div className=" text-black w-full md:w-full py-14  md:py-[100px]">
        {/*  */}
        <main className="  page-content px-6 md:px-[200px] w-full  text-left">
          {/*  */}
          <section className="form_section max-w-full  md:max-w-[693px] mx-auto">
            <h1 className="text title">Contact Me</h1>

            <p className="text mt-3">
              Hi there, contact me to ask me about anything you have in mind.
            </p>

            {/* form */}
            <div className="form_container w-full my-11 space-y-5 ">
              {/* row one */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="input_group">
                  <label htmlFor="name">first name</label>
                  <input
                    type="text"
                    id="first_name"
                    onChange={isValid}
                    placeholder="enter your first  name"
                    className={`form_input_field ${error && 'error'}`}
                  />
                {error &&  <p className=" text-[#F83F23] capitalize">
                    please enter a name
                  </p>}
                </div>
                {/*  */}

                <div className="input_group">
                  <label htmlFor="name">last name</label>
                  <input
                    type="text"
                    id="last_name"
                    placeholder="enter your last name"
                    className="form_input_field"
                  />
                </div>
              </div>

              {/* row two */}
              <div className="full my-2">
                <div className="input_group">
                  <label htmlFor="name">email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="enter your email"
                    className="form_input_field"
                  />
                </div>
              </div>

              {/* row three */}
              <div className="full my-2">
                <div className="input_group">
                  <label htmlFor="name">message</label>
                  <textarea
                    placeholder="Send me a message and I'll reply you as soon as possible..."
                    type="text"
                    id="message"
                    className=""
                  />
                </div>
              </div>

              <div className="w-full">
                {/* agree ment */}
                <div className="middle">
                  <input
                    type="checkbox"
                    className="w-5 h-6 border border-gray-300"
                    name="agree"
                    id=""
                  />
                  <p className="text ml-4">
                    You agree to providing your data to {"bobbydev"} who may
                    contact you.
                  </p>
                </div>

                {/* button */}

                <Link to={"/"}>
                  <button id="btn__submit" className="zuri_button mt-8">
                    Send message
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </main>

        <hr className="w-full  border border-gray-200  mt-[10%]" />

        <div className="  mt-11 mb-0 px-4 md:px-20 footer-images space-y-3 md:space-y-0 md:flex md:justify-between">
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

export default ContactPage;
