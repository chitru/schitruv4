import React from "react"

const leftArrow = "/slide/icons/leftArrow.svg"
const rightArrow = "/slide/icons/rightArrow.svg"

export default function SliderBtn({ direction, moveSlide }) {
    console.log(direction, moveSlide)
    return (
        <button
            className={ direction === "next" ? "slider-arrow next" : "slider-arrow prev"}
            onClick={moveSlide}
        >
            <img src={ direction === "next" ? rightArrow : leftArrow } alt="left arrow"/>
        </button>
    )
}
