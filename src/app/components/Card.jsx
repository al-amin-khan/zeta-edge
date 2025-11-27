import Image from 'next/image';
import React from 'react';

const Card = ({product}) => {
    const {image, title, price, shortDescription} = product;
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className='w-full h-full' >
                <img
                    src={image}
                    alt={title}
                    />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h2 className="card-title">${price}</h2>
                <p>{shortDescription}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-neutral text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;