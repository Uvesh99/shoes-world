import "./ProductPage.css"
import "./Carousel.css"
import shoe1 from "../assets/ProductPage/shoess1.png";
import shoe2 from "../assets/ProductPage/shoess2.png";
import shoe3 from "../assets/ProductPage/shoess3.png";
import shoe4 from "../assets/ProductPage/shoess4.png";
import shoe5 from "../assets/ProductPage/shoess5.png";
import shoe6 from "../assets/ProductPage/shoess6.png";
import { useState } from "react";
import { Carousel } from "./Carousel";
export default function ProductPagedetails({data, currentSlide, setCurrentSlide}){
    let [like,setLike]=useState(false);
    let [star,setStar]=useState(false);
    let [count,setcount]=useState(4.17);
    function toggleliked(){
        setLike(!like);
     }
    function toggleStar(){
        setStar(!star);
        if(!star){
            setcount(count+=0.01);
        }
        else{
            setcount(count-=0.01);
        }
    }
     let likeStyle={color:"red"};
     let sizeStyle={backgroundColor:"#E5E9EB"};
    return(
        <>
             <div className="prod3">
                <span className="rate" onClick={toggleStar}>{
                    star?
                    ( <i className="fa-solid fa-star" ></i>):
                    (<i className="fa-regular fa-star"></i>)
                }{count}</span><br />
                <span className="Shoe-title">Nike Air Zoom Flight 95</span><br />
                <span className="Shoe-gen">Men's Shoes</span>
                &nbsp;&nbsp;
               <div className="price">
               <span className="Shoe-price">$100</span>&nbsp;&nbsp;&nbsp;
                <span className="Shoe-discount-price">$100</span>&nbsp;&nbsp;&nbsp;
                <span className="Shoe-discount">66.67% off</span>
               </div>
               &nbsp;&nbsp;
               <div className="select">
                {
                    data.map((item,idx)=>{
                        return(
                                <img
                            src={item.src}
                            alt={item.alt}
                            key={idx}
                            className="shoe-img"
                            onClick={() => setCurrentSlide(idx)}
                          />      
                        );
                    })
                }
                {/* <img src={shoe1} alt="nike" className="shoe-img"/>
                <img src={shoe2} alt="nike" className="shoe-img"/>
                <img src={shoe3} alt="nike" className="shoe-img"/>
                <img src={shoe4} alt="nike" className="shoe-img"/>
                <img src={shoe5} alt="nike" className="shoe-img"/>
                <img src={shoe6} alt="nike" className="shoe-img"/> */}
               </div>
               &nbsp;&nbsp;
               <span style={{marginTop:"10px",color:"#252C32",fontWeight:"bold",fontSize:"16px"}}>Size</span><br/>
               <div className="size">
               <button onClick={sizeStyle} className="size-btn">XS</button>
               <button onClick={sizeStyle} className="size-btn">S</button>
               <button onClick={sizeStyle} className="size-btn">M</button>
               <button onClick={sizeStyle} className="size-btn">L</button>
               </div>
               &nbsp;&nbsp;
               <div className="cart">
                <button className="cart-btn">Add to Cart</button>
                <button onClick={toggleliked} className="fav-btn">Favorite { like?
                (<i className="fa-solid fa-heart" style={likeStyle}></i>):
                (<i className="fa-regular fa-heart"></i>)
                } </button>
               </div>
            </div>
        </>
    )
}