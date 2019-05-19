import React from 'react';

function Header(props) {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="colorlib-navbar-brand">
              <a className="colorlib-logo" href="/"><span className="logo-img"  style={{backgroundImage: `url(${props.logo})`}}></span>{props.name}</a>
            </div>
            <a href="/#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>
          </div>
        </div>
      </div>
    </header>
    );
}

export default Header;
