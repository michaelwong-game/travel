import React, { useEffect } from "react";
import "./Main.css";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import Aos from 'aos';
import "aos/dist/aos.css";

import img1 from "../../Assets/img1.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";
import img7 from "../../Assets/img7.jpg";
import img8 from "../../Assets/img8.jpg";
import img9 from "../../Assets/img9.jpg";

const data = [
    {
        id: 1,
        imgsrc: img1,
        destTitle: "Bora Bora",
        location: "New zealand",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description:
            "The Kremlin’s chief executioner in Crimea is not modest about having slaughtered some 70,000 of her neighbors.",
    },
    {
        id: 2,
        imgsrc: img2,
        destTitle: "Executioner",
        location: "New zealand",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description:
            "The Kremlin’s chief executioner in Crimea is not modest about having slaughtered some 70,000 of her neighbors.",
    },
    {
        id: 3,
        imgsrc: img3,
        destTitle: "Crimea",
        location: "New zealand",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description:
            "The Kremlin’s chief executioner in Crimea is not modest about having slaughtered some 70,000 of her neighbors.",
    },
    {
        id: 4,
        imgsrc: img4,
        destTitle: "Slaughtered",
        location: "New zealand",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description:
            "The Kremlin’s chief executioner in Crimea is not modest about having slaughtered some 70,000 of her neighbors.",
    },
    {
        id: 5,
        imgsrc: img5,
        destTitle: "Neighbors",
        location: "New zealand",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description:
            "The Kremlin’s chief executioner in Crimea is not modest about having slaughtered some 70,000 of her neighbors.",
    },
    {
        id: 6,
        imgsrc: img6,
        destTitle: "Kremlin’s",
        location: "New zealand",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description:
            "The Kremlin’s chief executioner in Crimea is not modest about having slaughtered some 70,000 of her neighbors.",
    },
    {
        id: 7,
        imgsrc: img7,
        destTitle: "Modest about",
        location: "New zealand",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description:
            "The Kremlin’s chief executioner in Crimea is not modest about having slaughtered some 70,000 of her neighbors.",
    },
    {
        id: 8,
        imgsrc: img8,
        destTitle: "About having",
        location: "New zealand",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description:
            "The Kremlin’s chief executioner in Crimea is not modest about having slaughtered some 70,000 of her neighbors.",
    },
    {
        id: 9,
        imgsrc: img9,
        destTitle: "Provide a valid",
        location: "New zealand",
        grade: "CULTURAL RELAX",
        fees: "$700",
        description:
            "The Kremlin’s chief executioner in Crimea is not modest about having slaughtered some 70,000 of her neighbors.",
    },
];

const Main = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className="main container seciton">
            <div className="setTitle">
                <h3 className="title" data-aos="fade-right">Most visited destinations</h3>
            </div>

            <div className="setContent grid">
                {data.map(
                    ({
                        id,
                        imgsrc,
                        destTitle,
                        location,
                        grade,
                        fees,
                        description,
                    }) => {
                        return (
                            <div id={id} className="singleDestination"  data-aos="fade-up">
                                <div className="imageDiv">
                                    <img src={imgsrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className="icon" />
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>
                                                {grade}
                                                <small>+1</small>
                                            </span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className="btn flex">
                                        DETAILS
                                        <HiOutlineClipboardCheck className="icon"/> 
                                    </button>
                                </div>
                            </div>
                        );
                    }
                )}
            </div>
        </section>
    );
};

export default Main;
