import "./ProductPage.css"
import "./Carousel.css";
import shoess1 from "../assets/ProductPage/shoesss1.png";
import shoe1 from "../assets/ProductPage/shoesx1.png";
import shoe2 from "../assets/ProductPage/shoess2.png";
import shoe3 from "../assets/ProductPage/shoess3.png";
import shoe4 from "../assets/ProductPage/shoess4.png";
import shoe5 from "../assets/ProductPage/shoess5.png";
import shoe6 from "../assets/ProductPage/shoess6.png";
import { useState } from "react";
import { Carousel } from "./Carousel";
import ProductPagedetails from "./ProductPagedetails";
import Services from "./ServicePage/Services";

export default function Product(){

     const slides=[
        {src:shoe1,alt:"shoe1"},
        {src:shoe2,alt:"shoe2"},
        {src:shoe3,alt:"shoe3"},
        {src:shoe4,alt:"shoe4"},
        {src:shoe5,alt:"shoe5"},
        {src:shoe6,alt:"shoe6"},];

    const [slide, setSlide] = useState(0);
    return(
        <>
        <div className="prod">
            <Carousel data={slides} currentSlide={slide} setCurrentSlide={setSlide}/>
            <ProductPagedetails data={slides} currentSlide={slide} setCurrentSlide={setSlide}/>
        </div>
        <Services/>
        </>
    );
}