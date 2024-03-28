import { useState } from "react";
import PropTypes from "prop-types";
import './form.css'

const Slider = (props) => {
    const [current, setCurrent] = useState(0);
    const length = props.sliderData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <div className="slider-container">
            <button onClick={prevSlide}>Previous</button>
            <button onClick={nextSlide}>Next</button>
            
            <div className="slider-images">
                {props.sliderData.map((array, index) => (
                    <div key={array.image}>
                        {index === current && (
                            <img src={array.image} alt="travel-image" />
                        )}
                    </div>
                ))}
            </div>
            <h1>hello1</h1>
        </div>
    );
};

Slider.propTypes = {
    sliderData: PropTypes.array.isRequired
};

export default Slider;
