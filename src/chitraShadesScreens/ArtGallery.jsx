import React from 'react';
import images from '../Json/jsonformat.json'; 
import "../styles/ArtGallery.scss";

const ArtGallery = () => {
    console.log(images);

    if (!images || Object.keys(images).length === 0) {
        return <h2>No images available.</h2>;
    }

    return (
        <div className="cards-container">
            <div className="cards">
                <h1>Image Gallery</h1>
                <div className="Art-grid">
                    {Object.entries(images).map(([category, items]) => (
                        items.map((image, index) => (
                            <div key={index} className="image-cards">
                                <img src={image.src} alt={image.name} />
                                <h3>{image.name}</h3>
                                <p>Handmade painting by ChitraShadez</p>
                                <h4>
                                    <span style={{ textDecoration: 'line-through', marginRight: '8px' }}>
                                        ₹{image.originalPrice}
                                    </span>
                                    <span>₹{image.price}</span>
                                </h4>
                            </div>
                        ))
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArtGallery;
