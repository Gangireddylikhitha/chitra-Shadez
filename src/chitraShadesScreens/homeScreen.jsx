import ImageCard from "../components/categoryImages";
import { VideoGallery } from "../components/video"
import "../styles/video.scss"
import "../styles/imageCard.scss"
import "../styles/footer.scss"

const HomeScreen=()=>{
    return(
<>

<VideoGallery/>

<div className="custom-heading">
<h1>CUSTOM PAINTING</h1>
<h2 className="colour-ideas">We color your ideas into beautiful painting!
</h2>
</div>

<ImageCard/>

<h2>Welcome to chitraShadez</h2>
 <p>your Destination for Premium Art Prints and Handmade Paintings</p>


 where art meets imagination and creativity flourishes. Step into a world of artwork where every stroke tells a story and every canvas reflects the essence of artistic expression. At chitraShadez, we curate a stunning & beautiful collection of premium art prints and handmade paintings online, carefully selected to adorn the walls of your home with elegance, style, and personality.
<h3>Explore Our Beautiful Art Collection for Every Room in Your Home</h3>
Explore our wide range of carefully curated art pieces available online, designed to enhance any area of your home. Whether you are looking for a striking focal point for your living room, a peaceful masterpiece for your bedroom, or a colorful accent for your dining room,chitraShadez offers something to cater to all preferences and aesthetics.



<h1>upcoming painting</h1>
<h3>Choose your Best</h3>

<p>            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum dolorum velit odit assumenda omnis expedita. A, est natus, quos accusamus optio adipisci voluptatum eligendi molestias dolore voluptates aspernatur delectus aperiam.\
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, dicta eaque? Accusamus quidem eius eum, consectetur officia autem. Aspernatur, sunt est. Perspiciatis reprehenderit natus fugiat aliquid accusantium non ex explicabo.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ratione saepe maxime accusamus ipsa amet porro autem asperiores sit! Ex laudantium quas animi rerum pariatur adipisci, autem temporibus facilis voluptas.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt dolores quod id unde eum laborum magnam possimus hic, earum cupiditate praesentium consectetur perspiciatis illum quasi iusto quam minima veniam. Repellendus!
</p>

<footer className="footer">
                <div className="footer-section">
                    <h3>About</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Newsletter</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Student Discount</a></li>
                        <li><a href="#">Wholesale Program</a></li>
                        <li><a href="#">Trade Program</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Help</h3>
                    <ul>
                        <li><a href="#">Track My Order</a></li>
                        <li><a href="#">Return My Order</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Shop</h3>
                    <ul>
                        <li><a href="#">Art Prints & Framed Art Prints</a></li>
                        <li><a href="#">Canvas Prints</a></li>
                        <li><a href="#">iPhone Cases</a></li>
                        <li><a href="#">Tapestries</a></li>
                        <li><a href="#">Comforters & Duvet Covers</a></li>
                        <li><a href="#">Throw Pillows & Throw Blankets</a></li>
                        <li><a href="#">Shower Curtains</a></li>
                        <li><a href="#">Gift Cards</a></li>
                        <li><a href="#">Klarna</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Artists</h3>
                    <ul>
                        <li><a href="#">Sell Your Art</a></li>
                        <li><a href="#">Meet Our Community</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Artist FAQs</a></li>
                        <li><a href="#">Community Guidelines</a></li>
                        <li><a href="#">Intellectual Property Concerns</a></li>
                        <li><a href="#">Artist Affiliate Program</a></li>
                        <li><a href="#">@Society6Community</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <ul>
                        <li><a href="#">Pinterest</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <p>&copy; 2020 Society6, LLC. LG Commerce. Some rights reserved.</p>
                    <ul>
                        <li><a href="#">Privacy Notice</a></li>
                        <li><a href="#">Cookie Notice</a></li>
                        <li><a href="#">Manage Preferences</a></li>
                        <li><a href="#">California Notice of Collection</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Copyright & Trademark Policy</a></li>
                        <li><a href="#">Accessibility</a></li>
                    </ul>
                    <p>USD $</p>
                </div>
            </footer>

</>

    )
}

export default HomeScreen;