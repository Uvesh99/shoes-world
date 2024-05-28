import shoef1 from "../assets/ProductPage/shoef1.png";
import map from "../assets/ProductPage/map.png";
import days from "../assets/ProductPage/days.png";
import delivery from "../assets/ProductPage/delivery.png";
import features from "../assets/ProductPage/features.png";
import reviews from "../assets/ProductPage/reviews.png";
import QueAns from "../assets/ProductPage/QueAns.png";
import care from "../assets/ProductPage/care.png";
import similarProd from "../assets/ProductPage/similarProd.png";
import MenuListComposition from "./MenuListComposition";
import AccordionUsage from "./QueAns";

export default function Services(){
    return(
        <>
        <div className="prod">
            <img src={shoef1} alt="adidas" className="left-img"/>
            {/* <Carousel data={slides} currentSlide={slide} setCurrentSlide={setSlide}/> */}
            <div className="prod3">
                <div className="services">
                <p className="ser"><img src={days} alt="free"/><br></br>7 days Free <br></br> Exchange Policy</p>
                <p className="ser"><img src={map} alt="india-map"/><br></br>Made in India <br></br> With Love</p>
                <p className="ser"><img src={QueAns} alt="delivery"/><br></br>Free Delivery <br></br> Within 4-5 days</p>
                
                </div>
                <MenuListComposition/>
            </div> 
        </div>
        <div className="feature">
        <p className="ser"><img src={features} alt="features"/><br></br><b>Features</b></p>
        <p className="ser"><img src={reviews} alt="reviews"/><br></br><b>Reviews</b></p>
        <p className="ser"><img src={QueAns} alt="QueAns"/><br></br><b>FYQ's</b></p>
        <p className="ser"><img src={care} alt="care"/><br></br><b>Care&info</b></p>
        <p className="ser"><img src={similarProd} alt="similarProd"/><br></br><b>Similar Product</b></p>
        </div>
        <AccordionUsage/>
        </>
    );
}