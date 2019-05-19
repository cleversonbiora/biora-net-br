import React from 'react';
import about from '../assets/about.jpg'

function About(props) {
  const networks = props.socialnetwork.map(function(sn, idx) {
    return <li key={idx}><a href={sn.link} target="_blank" rel="noopener noreferrer"><span className={sn.icon}></span></a></li>
  });
  return (
    <section className="ftco-section about-section">
      <div className="container">
        <div className="row d-flex" data-scrollax-parent="true">
          <div className="col-md-4 author-img" style={{backgroundImage: `url(${about})`}} data-scrollax=" properties: { translateY: '-70%'}"></div>
          <div className="col-md-2"></div>
          <div className="col-md-6 wrap ftco-animate">
            <div className="about-desc">
              <h1 className="bold-text">Sobre</h1>
              <div className="p-5">
                <h2 className="mb-5">Olá! Eu sou {props.name}</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in.</p>
                <p><a href="/#">Checkout my resume</a></p>
                <ul className="ftco-footer-social list-unstyled mt-4">
                  {networks}
                </ul>
                <h5>Entre em contato!</h5>
                <p>Email: <a href={`mailto:${props.email}`}>{props.email}</a></p>
                <p>Phone: <a href={`tel:${props.tel}`}>{props.tel}</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}

export default About;
