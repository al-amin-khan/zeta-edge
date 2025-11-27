import React from "react";
import Card from "./Card";

const HomeProductCards = async () => {
    try {
        const res = await fetch(
            "https://zeta-edge-server.vercel.app/api/products?limit=9",
        );

        if (!res.ok) {
            console.error("Failed to fetch products. Status:", res.status);
            throw new Error("Failed to fetch products");
        }

        const products = await res.json();

        if (!Array.isArray(products)) {
            console.error("Products response is not an array:", products);
            throw new Error("Invalid products data");
        }

        return (
            <div className="py-10">
                {products.length > 0 ? (
                    <div className="grid grid-cols-3 gap-4">
                        {products.map((product) => (
                            <Card key={product._id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="flex justify-center">
                        <p>No products found.</p>
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error("Error loading products:", error);

        return (
            <div className="py-10 flex justify-center">
                <p className="text-red-500">
                    Failed to load products. Please try again later.
                </p>
            </div>
        );
    }
};

export default HomeProductCards;
