import { useSelector, useDispatch } from "react-redux";
import { next, previous, click } from '../../features/slider/sliderSlice';
import images from '../../data';
import "./style.css";

export default function LightBox({ isActive }) {
    const current = useSelector((state) => state.slider.current);
    const dispatch = useDispatch();

    return (
        <div className="backward">
            <div style={{ width: '400px' }}>

                <span onClick={() => isActive(false)} className="d-flex justify-content-end" style={{ fontSize: '25px', color: '#fff', fontWeigth: 'bold', cursor: 'pointer' }}>x</span>

                <div className="slider position-relative">
                    <a onClick={() => dispatch(previous())} href="#" className="btn-slider prev">
                        <img style={{ width: '10px' }} src="/images/icon-previous.svg" alt="prev" />
                    </a>
                    {images.map(({ img, name }, index) => {
                        return (
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                {index === current && (<img style={{ borderRadius: '10px', cursor: 'pointer' }} src={img} alt={name} />)}
                            </div>
                        )
                    })}

                    <a onClick={() => dispatch(next())} href="#" className="btn-slider next">
                        <img style={{ width: '10px' }} src="/images/icon-next.svg" alt="next" />
                    </a>
                </div>

                <div className="slide-below d-flex mx-auto gap-3 my-4" style={{ width: '350px' }}>
                    {images.map(({ img, name }, index) => {
                        return (
                            <div style={{ cursor: 'pointer' }} className={index === current ? 'box-border' : ''} key={index}>
                                <img onClick={() => dispatch(click(index))} className={index === current ? 'img-opacity' : ''} src={img} alt={name} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}