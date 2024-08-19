import React, { useState } from "react";
import { SiGmail } from "react-icons/si";
import { FiHome } from "react-icons/fi";
import { IoMdPerson } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { PiTelegramLogoThin } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdAllInbox } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { PiTelegramLogoLight } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import "../Css/Details.css";
import img_icon from "../assets/bg1.png";
const Details = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`main ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <nav>
        <h4>Onbox</h4>
        <div className="second">
          <h4>Tim's Workspace</h4>
          <div className="chng" onClick={toggleTheme}>
            {isDarkMode ? <IoSunnyOutline /> : <IoMoonOutline />}
          </div>
        </div>
      </nav>
      <div className="body">
        <aside>
          <div className="one">
            <SiGmail />
            <FiHome />
            <IoMdPerson />
            <CiMail />
            <PiTelegramLogoThin />
            <GiHamburgerMenu />
            <MdAllInbox />
            <IoStatsChart />
          </div>
        </aside>
        <div className="content">
          <div className="sideBar">
            <div className="one">
              <h3>
                All Inbox(s) <IoIosArrowDown />
              </h3>
              <h4>25/25 Inboxes Selected</h4>
              <div className="in">
                <CiSearch />
                <input type="text" placeholder="Search" />
              </div>
              <div className="lst">
                <span className="spa">23</span> <span>New replies</span>{" "}
                <span>Newest</span> <IoIosArrowDown />
              </div>
              <hr />
            </div>
            <div className="two">
              <div className="fst">
                <div className="fst1">
                  <span>Beta@gmail.com</span> <span>May 7</span>
                </div>
                <h3>I've tried a lot and..</h3>
                <div className="fst2">
                  <div>
                    <ul>
                      <li>Intrested</li>
                    </ul>
                  </div>
                  <div>
                    <PiTelegramLogoLight />
                    Campaign name
                  </div>
                </div>
              </div>
              <div className="fst">
                <div className="fst1 fs">
                  <span>Sanya@gmail.com</span> <span>May 7</span>
                </div>
                <h3>I've tried a lot and..</h3>
                <div className="fst2">
                  <div>
                    <ul>
                      <li>Closed</li>
                    </ul>
                  </div>
                  <div>
                    <PiTelegramLogoLight />
                    Campaign name
                  </div>
                </div>
              </div>
            </div>
            <div className="two tw">
              <div className="fst">
                <div className="fst1">
                  <span>William@gmail.com</span> <span>May 7</span>
                </div>
                <h3>I've tried a lot and..</h3>
                <div className="fst2">
                  <div>
                    <ul>
                      <li>Intrested</li>
                    </ul>
                  </div>
                  <div>
                    <PiTelegramLogoLight />
                    Campaign name
                  </div>
                </div>
              </div>
              <div className="fst">
                <div className="fst1 fs">
                  <span>Jhonson@gmail.com</span> <span>May 7</span>
                </div>
                <h3>I've tried a lot and..</h3>
                <div className="fst2">
                  <div>
                    <ul>
                      <li>Meeting Booked</li>
                    </ul>
                  </div>
                  <div>
                    <PiTelegramLogoLight />
                    Campaign name
                  </div>
                </div>
              </div>
            </div>
            <div className="two tw">
              <div className="fst">
                <div className="fst1">
                  <span>Orland@gmail.com</span> <span>May 7</span>
                </div>
                <h3>I've tried a lot and..</h3>
                <div className="fst2">
                  <div>
                    <ul>
                      <li>Meeting completed</li>
                    </ul>
                  </div>
                  <div>
                    <PiTelegramLogoLight />
                    Campaign name
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mdl">
            <div className="mdl1">
              <div>
                <h4>Orlando</h4>
                <h5>orlandom@gmail.com</h5>
              </div>
              <div className="mdl11">
                <div className="cmn">
                  <h4>Meeting Completed </h4>
                  <span>
                    {" "}
                    <IoIosArrowDown />
                  </span>
                </div>
                <div className="cmn">
                  <h4>Move</h4>
                  <span>
                    <IoIosArrowDown />
                  </span>
                </div>
                <div>
                  <span className="span">...</span>
                </div>
              </div>
            </div>
            <div className="mdl2">
              <div className="inMdl">
                <div className="inMdl1">
                  <h5>New product Launch</h5>
                  <h6>20 june 2022 9.16 am</h6>
                </div>
                <div className="inMdl2">
                  <h5>from: jenne@icloud.com cc : j@mail.com</h5>
                </div>
                <div className="inMdl2">
                  <h5>to : lennon.j@mail.com</h5>
                </div>
                <div className="inMdl2">
                  <h5>Hi FirstName</h5>
                </div>
                <div className="inMdl3">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                    at. Pariatur tenetur voluptatibus nesciunt fugit ipsa fugiat
                    nam impedit hic beatae unde, saepe rerum magni aliquam
                    cupiditate vel, atque cumque similique tempore sint
                    consequuntur doloribus quaerat quasi? Voluptatem cumque
                    similique nostrum, esse quidem molestias adipisci optio nisi
                    doloribus. Consectetur, libero iste, voluptatibus ipsa
                    veritatis mollitia cupiditate alias ab corrupti est esse quo
                    et repellendus. Dicta possimus ipsam reprehenderit
                    voluptates eligendi dolor quod nihil vel itaque laborum
                    consectetur aperiam optio alias laboriosam, nobis quisquam.
                    Ipsum eum ratione nesciunt, eos similique deleniti provident
                    voluptatem corrupti molestias odit deserunt repellendus,
                    nostrum ex eaque?
                  </p>
                </div>
              </div>
            </div>
            <div className="mdl3">
              <button> <span> </span>Reply</button>
            </div>
          </div>
          <div className="last">
            <div className="lst1">
              <div className="det">
                <h4>Load Details</h4>
              </div>
              <div className="det1">
                <h3>Name</h3> <span>Orlando</span>
              </div>
              <div className="det1">
                <h3>Contat No</h3> <span>+54 - 906126132262</span>
              </div>
              <div className="det1">
                <h3>EmailId</h3> <span>orland@gmail.com</span>
              </div>
              <div className="det1">
                <h3>Linkdln</h3> <span>linkdln.com/in/twtwew</span>
              </div>
              <div className="det1">
                <h3>CompanyName</h3> <span>ReachInbox</span>
              </div>
            </div>
            <div className="lst2">
              <div className="det2">
                <h4>Activities</h4>
              </div>
              <div className="det3">
                <h3>Campaign Name</h3>
              </div>
              <div className="det5">
                <h3>3 steps</h3> <h3>5 days in sequence</h3>
              </div>
              <div className="det4">
                <span>
                  <CiMail />
                </span>
                <div>
                  <h3>Step1:Gmail</h3>
                  <div>
                    <PiTelegramLogoLight />
                    Sent 3rd,Feb
                  </div>
                </div>
              </div>
              <div className="det4">
                <span>
                  <CiMail />
                </span>
                <div>
                  <h3>Step2:Gmail</h3>
                  <div>
                    <PiTelegramLogoLight />
                    Opended 5th,Feb
                  </div>
                </div>
              </div>
              <div className="det4">
                <span>
                  <CiMail />
                </span>
                <div>
                  <h3>Step1:Gmail</h3>
                  <div>
                    <PiTelegramLogoLight />
                    opende 5th,Feb
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
