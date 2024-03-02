import React from 'react';
import { Product, AllProducts } from '../../lib/types';

const ProductsList: React.FC<AllProducts> = ({allProducts}) => {  
    const products = Object.values(allProducts);

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {allProducts ? (
                    products[0].map((product: Product) => (
                        <li key={product.id}>{product.title}</li>
                    ))
                ) : (
                    <p>Loading ...</p>
                )}
            </ul>
        </div>
    );
};


export default ProductsList;