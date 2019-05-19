import React from 'react';

function Slider(props) {
  return (
    <section className="home-slider owl-carousel js-fullheight">
        {props.children}
    </section>
    );
}

export default Slider;
