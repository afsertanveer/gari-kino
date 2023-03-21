import React from "react";

const ServiceCard = ({service}) => {
    const {title,price,img} = service;
  return (
    <div>
      <div className="card card-compact h-80 shadow-xl">
        <figure>
          <img
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}!</h2>
          <p className="text-2xl text-orange-600 font-sem
          ">Price: ${price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
