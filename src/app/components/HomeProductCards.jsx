import React from 'react';
import Card from './Card';

const HomeProductCards = async () => {
    const res = await fetch('https://zeta-edge-server.vercel.app/api/products?limit=9', { cache: 'no-store' });
    const products = await res.json();
    console.log(products);

    console.log(process.env.DATABASE_URL)
    
    return (
        <div>
            <div className="grid grid-cols-3 gap-4 py-10">
                {
                    products.map(product => <Card key={product._id} product={product}></Card>)
                }
                
            </div>
        </div>
    );
};

export default HomeProductCards;