import React from 'react';
import Service from './Service'

function Services(props) {
  const services = props.services.map(function(service, idx) {
    return <Service {...service} />
  });
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-5">
          <div className="col-md-7 text-center heading-section ftco-animate">
            <span>O que fazemos</span>
            <h2>SERVIÇOS</h2>
          </div>
        </div>
        <div className="row">
          {services}
        </div>
      </div>
    </section>
    );
}

export default Services;
