import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';

export default function useWindowSize() {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        setWidth(window.innerWidth);
    })

    useEffect(() => {
        setHeight(window.innerheight);
    })

    const getSize = () => {
        return{
            width,
            height,
        }

        
    }

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
        const handleResize = () => {
            setWindowSize(getSize());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return windowSize;
}