import React from 'react';
import { useParams } from "react-router-dom";
import images from '../Json/jsonformat.json'; // Adjust the path if necessary

const CategoryGallery = () => {
    const { category } = useParams();

    console.log(category,"categories")
    console.log(images,"all images"); 

  
    const categoryImages = images[category] || []; 
    console.log(categoryImages,"specific images")

    return (
        <div className="cards-container">
            <h1>{category.replace('-', ' ')}</h1>
            <div className="image-grid">
                {
                categoryImages.length > 0 ? (
                    categoryImages.map((image, index) => (
                        <div key={index} className="image-card">
                            <img src={image.src} alt={image.name} />
                            <h2>{image.name}</h2>
                            <h3>Price: ₹{image.price}</h3>
                        </div>
                    ))
                ) : (
                    <h2>No images found for this category.</h2>
                )}
            </div>
        </div>
    );
};

export default CategoryGallery;
