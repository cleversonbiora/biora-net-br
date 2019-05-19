import React from 'react';

function Footer(props) {
  const networks = props.socialnetwork.map(function(sn, idx) {
    return <li key={idx} className="ftco-animate"><a href={sn.link} target="_blank" rel="noopener noreferrer"><span className={sn.icon}></span></a></li>
  });
  return (
    <footer className="ftco-footer ftco-bg-dark ftco-section">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-md-5 text-center">
            <div className="ftco-footer-widget mb-5">
              <ul className="ftco-footer-social list-unstyled">
                {networks}
              </ul>
            </div>
            <div className="ftco-footer-widget">
              <h2 className="mb-3">CONTATO</h2>
              <p className="h3 email"><a href={`mailto:${props.email}`}>{props.email}</a></p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
                Copyright &copy; {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
    );
}

export default Footer;
