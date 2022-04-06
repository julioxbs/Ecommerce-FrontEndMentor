import { useSelector, useDispatch } from "react-redux";
import images from '../../data';
import LightBox from "./lightbox";
import { next, previous, click } from '../../features/slider/sliderSlice';
import "./style.css";
import { useEffect, useState } from "react";

export default function Slider() {
    const [activeBox, setActiveBox] = useState(false);
    const current = useSelector((state) => state.slider.current);
    const dispatch = useDispatch();

    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
    });

    const setDimension = () => {
        getDimension({
            dynamicWidth: window.innerWidth,
            dynamicHeight: window.innerHeight
        })
    }

    useEffect(() => {
        window.addEventListener('resize', setDimension);

        return (() => {
            window.removeEventListener('resize', setDimension);
            console.log(screenSize.dynamicWidth)
        });

    }, [screenSize])

    return (
        <div className="content-slider mt-md-5 d-flex flex-column align-items-center justify-content-center">
            <a onClick={() => dispatch(previous())} href="#" className="btn-slider prev d-md-none">
                <img style={{ width: '10px' }} src="/images/icon-previous.svg" alt="prev" />
            </a>

            <div className="slider d-flex">
                {images.map(({ img, name }, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (<img onClick={() => setActiveBox(true)} style={{ borderRadius: '10px', cursor: 'pointer' }} src={img} alt={name} />)}
                        </div>
                    )
                })}
            </div>

            <div className="slide-below d-none d-md-flex justify-content-between gap-3 my-4" style={{ width: '500px' }}>
                {images.map(({ img, name }, index) => {
                    return (
                        <div style={{ cursor: 'pointer' }} className={index === current ? 'box-border' : ''} key={index}>
                            <img onClick={() => dispatch(click(index))} className={index === current ? 'img-opacity' : ''} src={img} alt={name} />
                        </div>
                    )
                })}
            </div>

            <a onClick={() => dispatch(next())} href="#" className="btn-slider next d-md-none">
                <img style={{ width: '10px' }} src="/images/icon-next.svg" alt="next" />
            </a>

            {activeBox && screenSize.dynamicWidth > 590 && <LightBox isActive={setActiveBox} />}
        </div>
    );
}