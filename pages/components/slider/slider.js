import { v4 as uuidv4 } from 'uuid';
import React, { useState } from "react";
import Link from 'next/link'
import SliderBtn from "./sliderBtn"

const sliderData = [
    {
        id: uuidv4(),
        title: "Concpet UX/UI for a multi-purpose theme",
        subTitle: "Design",
        nextSlide: "a",
        prevSlide: "b",
        img: "/slide/1.png",
        siteLink: "#"
    },
    {
        id: uuidv4(),
        title: "picture.tools is a AI picture ediotr, an startup currently in the process of funding",
        subTitle: "Design",
        nextSlide: "a",
        prevSlide: "b",
        img: "/slide/2.png",
        siteLink: "https://www.figma.com/file/iEusX4FBryIQOLFpYyNbMh/ShreeJesh-Boutique?node-id=0%3A1"
    },
    {
        id: uuidv4(),
        title: "Graphics Design",
        subTitle: "Design",
        nextSlide: "a",
        prevSlide: "b",
        img: "/slide/3.png",
        siteLink: "#"
    },
    {
        id: uuidv4(),
        title: "Brochure Design",
        subTitle: "Design",
        nextSlide: "a",
        prevSlide: "b",
        img: "/slide/5.png",
        siteLink: "#"
    },
    {
        id: uuidv4(),
        title: "Brochure Design",
        subTitle: "Design",
        nextSlide: "a",
        prevSlide: "b",
        img: "/slide/6.png",
        siteLink: "#"
    },
    {
        id: uuidv4(),
        title: "Brochure Design",
        subTitle: "Design",
        nextSlide: "a",
        prevSlide: "b",
        img: "/slide/7.png",
        siteLink: "#"
    },
]

export default function Slider() {

    const [sliderIndex, setSliderIndex] = useState(1);

    const nextSlide = () => {
        if (sliderIndex !== sliderData.length) {
            setSliderIndex(sliderIndex + 1);
        } else if (sliderIndex === sliderData.length) {
            setSliderIndex(1);
        }
    }

    const prevSlide = () => {
        if(sliderIndex !== 1) {
            setSliderIndex(sliderIndex - 1);
        }
        else if (sliderIndex === 1) {
            setSliderIndex(sliderData.length);
        }
    }
    
    return(
        <div>
        <div className="slider-container">
            {sliderData.map((item, index) => {
                return(
                    <div 
                        key={item.id}
                        className={sliderIndex === index + 1 ? "slider-item active" : "slider-item" }>
                        <Link href={item.siteLink}>
                            <img
                                src={item.img}
                            />
                        </Link>
                    </div>
                )
            })}
            <div className="nextImg">
                <SliderBtn moveSlide={nextSlide} direction={"next"}/>
                {/* { sliderData.map((item, index) => {
                    return(
                        <div
                            key={item.id}
                        >
                            <img
                                src={item.img}
                                width="100px"
                            />
                        </div>
                    )
                })} */}
            </div>
            <div className="prevImg">
                <SliderBtn moveSlide={prevSlide} direction={"prev"}/>
            </div>
        </div>
            <div className="clearfix"></div>
        </div>
    )
}