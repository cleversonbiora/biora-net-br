import React from 'react';

function Service(props) {
  const items = props.items.map(function(item, idx) {
    return <h3 className="heading">{item}</h3>
  });
  return (
      <div className="col-md-4 d-flex align-self-stretch ftco-animate">
        <div className="media block-6 services p-3 py-4 d-block text-center">
          <div className="icon mb-3"><span className={props.icon}></span></div>
          <div className="media-body">
            {items}
          </div>
        </div>      
      </div>
    );
}

export default Service;
