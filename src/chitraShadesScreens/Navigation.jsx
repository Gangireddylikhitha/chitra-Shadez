import { Routes, Route, Link } from 'react-router-dom';
import HomeScreen from './homeScreen';
import ArtCategory from './ArtCategory';
import ArtGallery from './ArtGallery';
import About from './aboutscreen';
import Contact from './contact'; // Adjust the path based on your structure
import CategoryGallery from '../components/categorywisepics';

const Navigation = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/art-category" element={<ArtCategory />} />
                <Route path="/categories/:category" element={<CategoryGallery/>} /> Route for categories
                <Route path="/artgallery" element={<ArtGallery />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<h1>Page Not Found</h1>} />
            </Routes>
        </div>
    );
};

export default Navigation;
