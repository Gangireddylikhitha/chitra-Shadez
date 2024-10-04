
import React from 'react';
// import './ImageCard.css'; // Import the CSS file for styles

const ImageCard = () => {
    const images = [
      
        "https://i.pinimg.com/564x/3b/be/65/3bbe6586a7ff24072a8bf125611d7f94.jpg",
      
        "https://i.pinimg.com/564x/3a/1b/81/3a1b8141750fd95d1276394cd7f26343.jpg",
        "https://i.pinimg.com/564x/ef/2f/b3/ef2fb34fe133298696bbf24350115b87.jpg",
        "https://i.pinimg.com/736x/15/58/74/15587427adf27915aeb3524b81d785b7.jpg"
    ];

    return (
        <div className="card-container">
            <div className="card">
                <h1>Image Gallery</h1>
                <div className="image-grid">
                    {images.map((src, index) => (
                        <img key={index} src={src} alt={`Image ${index + 1}`} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageCard;
