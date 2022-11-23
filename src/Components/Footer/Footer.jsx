import React, { useEffect } from "react";
import "./Footer.css";
import { FiChevronRight, FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";

import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import video from "../../Assets/cartoon.mp4";

import Aos from 'aos';
import "aos/dist/aos.css";

const Footer = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={video} autoPlay muted loop type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div className="text" data-aos='fade-up'>
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input type="text" placeholder="Enter Email Address"  data-aos='fade-up'/>
                        <button className="btn flex" type="submit"  data-aos='fade-up'>
                            SEND <FiSend className="icon" />
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                                <MdOutlineTravelExplore className="icon" />{" "}
                                Travel.
                            </a>
                        </div>

                        <div className="footerParagraph" data-aos='fade-up'>
                            ‘It’s not safe and it’s not right.’ Qatar says all
                            are welcome to the World Cup but some LGBTQ soccer
                            fans are staying away
                        </div>

                        <div className="footerSocials flex" data-aos='fade-up'>
                            <AiOutlineTwitter className="icon" />
                            <AiFillYoutube className="icon" />
                            <AiFillInstagram className="icon" />
                            <FaTripadvisor className="icon" />
                        </div>
                    </div>

                    <div className="footerLinks grid">
                        {/*group one*/}
                        <div className="linkGroup" data-aos='fade-up' data-aos-duration="3000">
                            <span className="groupTitle">OUR AGENCY</span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Services
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Insurance
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Agency
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Tourism
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Payment
                            </li>
                        </div>

                        {/*group two*/}
                        <div className="linkGroup" data-aos='fade-up' data-aos-duration="4000">
                            <span className="groupTitle">PARTNERS</span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Services
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Insurance
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Agency
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Tourism
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Payment
                            </li>
                        </div>

                        {/*group three*/}
                        <div className="linkGroup" data-aos='fade-up' data-aos-duration="4 000">
                            <span className="groupTitle">LAST MINUTE</span>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Services
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Insurance
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Agency
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Tourism
                            </li>

                            <li className="footerList flex">
                                <FiChevronRight className="icon" />
                                Payment
                            </li>
                        </div>
                    </div>

                    <div className="footerDiv flex">
                      <small>BEST TRAVEL WEBSITE THEME</small>
                      <small>COPYRIGHTS RESERVED - ISRATECH 2022</small>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
