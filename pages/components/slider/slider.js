import { v4 as uuidv4 } from 'uuid';
import React, { useState } from "react";
import Image from 'next/image'

const sliderData = [
    {
        id: uuidv4(),
        title: "UI/UX Design",
        subTitle: "Design",
        nextSlide: "a",
        prevSlide: "b",
        img: "/slide/1.png",
    },
    {
        id: uuidv4(),
        title: "Product Design",
        subTitle: "Design",
        nextSlide: "a",
        prevSlide: "b",
        img: "/slide/2.png",
    },
    {
        id: uuidv4(),
        title: "Graphics Design",
        subTitle: "Design",
        nextSlide: "a",
        prevSlide: "b",
        img: "/slide/3.png",
    },
    {
        id: uuidv4(),
        title: "Card Design",
        subTitle: "Design",
        nextSlide: "a",
        prevSlide: "b",
        img: "/slide/4.png",
    },
    
    {
        id: uuidv4(),
        title: "Brochure Design",
        subTitle: "Design",
        nextSlide: "a",
        prevSlide: "b",
        img: "/slide/5.png",
    },
]

export default function Slider() {
    return(
        <div>
            <div className="slider-container">
                {sliderData.map((item, index) => {
                    return(
                        <div className="slider-item">
                            <img
                                src={item.img}
                                />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}