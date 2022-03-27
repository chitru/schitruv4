import { v4 as uuidv4 } from 'uuid';
import React, { useState } from "react";
import Link from "next/link";
import SliderBtn from "./sliderBtn";


const sliderData = [
    {
        id: uuidv4(),
        title: "Brochure Design",
        subTitle: "Design",
        nextSlide: "a",
        prevSlide: "b",
        img: "/slide/2.1.png",
        siteLink: "#"
    },
]

export default function SliderDesign() {

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
            </div>
            <div className="prevImg">
                <SliderBtn moveSlide={prevSlide} direction={"prev"}/>
            </div>
        </div>
            <div className="clearfix"></div>
        </div>
    )
}