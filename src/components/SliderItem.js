import React from 'react';

function SliderItem(props) {
  return (
    <div className="slider-item js-fullheight">
        <div className="overlay"></div>
            <div className="container">
            <div className="row slider-text align-items-center text-center justify-content-center" data-scrollax-parent="true">
                <div className="col-md-12 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                    <p><a href="/#" className="scroll">{props.subText}</a></p>
                    <h1 className="mb-3" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">{props.mainText}</h1>
                </div>
            </div>
        </div>
    </div>
    );
}

export default SliderItem;
