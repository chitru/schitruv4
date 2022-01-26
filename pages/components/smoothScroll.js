import React,  {useEffect, useRef } from "react";
import useWindowSize from "../useWindowSize";

const SmoothScroll = ({children}) => {
    const windowSize = useWindowSize();
    const scrollRef = useRef();

    const data = {
        ease: 0.1,
        current: 0,
        previous: 0,
        rounded: 0,
    }

    useEffect(() => {
        setBodyHeight();
    }, [windowSize.height]);

    const setBodyHeight = () => {
        document.body.style.height = `${scrollRef.current.getBoundingClientRect().height}px`;
    }

    const smoothScrollingHandler = () => {
        data.current = window.scrollY;
        data.previous += (data.current -data.previous) * data.ease;
        data.rounded = Math.round(data.previous * 100) / 100;

        scrollRef.current.style.transform = `translateY(-${data.previous}px)`;

        requestAnimationFrame(() => smoothScrollingHandler());
    }

    return(
        <div className="scroll-smooth">
            <div ref={scrollRef}>{children}</div>
        </div>
    )
}

export default SmoothScroll;