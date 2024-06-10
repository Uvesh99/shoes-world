import React, { useEffect } from 'react';
import shoef1 from "../../assets/ProductPage/shoef1.png";
import map from "../../assets/ProductPage/map.png";
import days from "../../assets/ProductPage/days.png";
import delivery from "../../assets/ProductPage/delivery.png";
import features from "../../assets/ProductPage/features.png";
import reviews from "../../assets/ProductPage/reviews.png";
import QueAns from "../../assets/ProductPage/QueAns.png";
import care from "../../assets/ProductPage/care.png";
import similarProd from "../../assets/ProductPage/similarProd.png";
import feat1 from "../../assets/ProductPage/feat1.jpg";
import MenuListComposition from "../MenuListComposition";
import AccordionUsage from "./Service_3";
import Service_1 from './Service_1';
import Service_2 from './Service_2';
import Service_4 from './Service_4';
import Service_5 from './Service_5';

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

        
        {/* <div className="feature">
        <p className="ser"><img src={features} alt="features"/><br></br><b>Features</b></p>
        <p className="ser"><img src={reviews} alt="reviews"/><br></br><b>Reviews</b></p>
        <p className="ser"><img src={QueAns} alt="QueAns"/><br></br><b>FYQ's</b></p>
        <p className="ser"><img src={care} alt="care"/><br></br><b>Care&info</b></p>
        <p className="ser"><img src={similarProd} alt="similarProd"/><br></br><b>Similar Product</b></p>
        </div> */}
        <div className="feature" >
        <p className="ser"><a href="#sec1"><img src={features} alt="features"/><br></br><b>Features</b></a></p>
        <p className="ser"><a href="#sec2"><img src={reviews} alt="reviews"/><br></br><b>Reviews</b></a></p>
        <p className="ser"><a href="#sec3"><img src={QueAns} alt="QueAns"/><br></br><b>FYQ's</b></a></p>
        <p className="ser"><a href="#sec4"><img src={care} alt="care"/><br></br><b>Care&info</b></a></p>
        <p className="ser"><a href="#sec5"><img src={similarProd} alt="similarProd"/><br></br><b>Similar Product</b></a></p>
        </div>
        
        <section id="sec1">
            <Service_1/>
        </section >
        <hr  />
        <section id="sec2">
            <Service_2/>
        </section>
        <hr />
        <section id="sec3">
        <AccordionUsage/>
        </section>
        <hr />
        <section id="sec4">
            <Service_4/>
        </section>
        <hr />
        <section id="sec5">
            <Service_5/>
        </section>
        </>
    );
}



// import React, { useEffect, useRef, useState } from 'react';
// import shoef1 from "../../assets/ProductPage/shoef1.png";
// import map from "../../assets/ProductPage/map.png";
// import days from "../../assets/ProductPage/days.png";
// import delivery from "../../assets/ProductPage/delivery.png";
// import features from "../../assets/ProductPage/features.png";
// import reviews from "../../assets/ProductPage/reviews.png";
// import QueAns from "../../assets/ProductPage/QueAns.png";
// import care from "../../assets/ProductPage/care.png";
// import similarProd from "../../assets/ProductPage/similarProd.png";
// import MenuListComposition from "../MenuListComposition";
// import AccordionUsage from "./Service_3";
// import Service_1 from './Service_1';
// import Service_2 from './Service_2';
// import Service_4 from './Service_4';
// import Service_5 from './Service_5';

// export default function Services() {
//     const [isFixed, setIsFixed] = useState(false);
//     const featureRef = useRef(null);

//     useEffect(() => {
//         const handleScroll = () => {
//             if (featureRef.current) {
//                 const topOffset = featureRef.current.getBoundingClientRect().top;
//                 if (topOffset <= 0) {
//                     setIsFixed(true);
//                 } else {
//                     setIsFixed(false);
//                 }
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <>
//             <div className="prod">
//                 <img src={shoef1} alt="adidas" className="left-img" />
//                 <div className="prod3">
//                     <div className="services">
//                         <p className="ser"><img src={days} alt="free" /><br />7 days Free <br /> Exchange Policy</p>
//                         <p className="ser"><img src={map} alt="india-map" /><br />Made in India <br /> With Love</p>
//                         <p className="ser"><img src={QueAns} alt="delivery" /><br />Free Delivery <br /> Within 4-5 days</p>
//                     </div>
//                     <MenuListComposition />
//                 </div>
//             </div>

//             <nav ref={featureRef} className={`feature ${isFixed ? 'fixed' : ''}`}>
//                 <div>
//                     <p className="ser"><a href="#sec1"><img src={features} alt="features" /><br /><b>Features</b></a></p>
//                     <p className="ser"><a href="#sec2"><img src={reviews} alt="reviews" /><br /><b>Reviews</b></a></p>
//                     <p className="ser"><a href="#sec3"><img src={QueAns} alt="QueAns" /><br /><b>FYQ's</b></a></p>
//                     <p className="ser"><a href="#sec4"><img src={care} alt="care" /><br /><b>Care&info</b></a></p>
//                     <p className="ser"><a href="#sec5"><img src={similarProd} alt="similarProd" /><br /><b>Similar Product</b></a></p>
//                 </div>
//             </nav>

//             <section id="sec1" className="section">
//                 <Service_1 />
//             </section>
//             <hr />
//             <section id="sec2" className="section">
//                 <Service_2 />
//             </section>
//             <hr />
//             <section id="sec3" className="section">
//                 <AccordionUsage />
//             </section>
//             <hr />
//             <section id="sec4" className="section">
//                 <Service_4 />
//             </section>
//             <hr />
//             <section id="sec5" className="section">
//                 <Service_5 />
//             </section>
//         </>
//     );
// }
