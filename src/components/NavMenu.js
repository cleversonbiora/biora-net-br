import React from 'react';

function NavMenu(props) {
  return (
        <nav id="colorlib-main-nav" role="navigation">
          <a href={'/'} className="js-colorlib-nav-toggle colorlib-nav-toggle active"><i></i></a>
          <div className="js-fullheight colorlib-table">
            <div className="img" ></div>
            <div className="colorlib-table-cell js-fullheight">
              <div className="row no-gutters">
                <div className="col-md-12 text-center">
                  <h1 className="mb-4"><a href="/" className="logo">{props.name}</a></h1>
                  <ul>
                    {props.children}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
    );
}

export default NavMenu;
