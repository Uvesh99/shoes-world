import Allcollections from "./Allcollections.jsx";
import "./ProductDetails.css";
import { Link } from "react-router-dom";

function ProductDetail() {
  return (
    <>
       <div className="shoes_collection">
         <h1 className="shop_title">
           Shoes for Men & Women
         </h1>

          <div className="collection-breadcrumb-desk">
            <div className="collection-breadcrumb-wrapper">
              <div className="collection-breadcrumb">

                <div className="breadcrumbs-content home-svg bread-home-svg">
                  <a aria-label="Home" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                      <path d="M17.0961 8.33617L10.8461 2.4393C10.843 2.43663 10.8402 2.43376 10.8375 2.4307C10.6074 2.22143 10.3075 2.10547 9.99648 2.10547C9.68545 2.10547 9.38558 2.22143 9.15547 2.4307L9.14688 2.4393L2.90391 8.33617C2.77656 8.45327 2.67491 8.59553 2.60538 8.75395C2.53586 8.91236 2.49997 9.08348 2.5 9.25648V16.4791C2.5 16.8107 2.6317 17.1286 2.86612 17.363C3.10054 17.5974 3.41848 17.7291 3.75 17.7291H7.5C7.83152 17.7291 8.14946 17.5974 8.38388 17.363C8.6183 17.1286 8.75 16.8107 8.75 16.4791V12.7291H11.25V16.4791C11.25 16.8107 11.3817 17.1286 11.6161 17.363C11.8505 17.5974 12.1685 17.7291 12.5 17.7291H16.25C16.5815 17.7291 16.8995 17.5974 17.1339 17.363C17.3683 17.1286 17.5 16.8107 17.5 16.4791V9.25648C17.5 9.08348 17.4641 8.91236 17.3946 8.75395C17.3251 8.59553 17.2234 8.45327 17.0961 8.33617ZM16.25 16.4791H12.5V12.7291C12.5 12.3976 12.3683 12.0797 12.1339 11.8453C11.8995 11.6108 11.5815 11.4791 11.25 11.4791H8.75C8.41848 11.4791 8.10054 11.6108 7.86612 11.8453C7.6317 12.0797 7.5 12.3976 7.5 12.7291V16.4791H3.75V9.25648L3.75859 9.24867L10 3.35414L16.2422 9.24711L16.2508 9.25492L16.25 16.4791Z" fill="#222222"></path>
                    </svg>
                  </a>
                </div>
  
                 <div className="breadcrumbs-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                      <path d="M4.5 2.47913L8.25 6.22913L4.5 9.97913" stroke="#808080"></path>
                    </svg>
                  </div> 

                  <div className="breadcrumbs-content 55555">
                     <Link aria-label="All Products" to={"/shop"}> All Products </Link>
                  </div>
          
                    <div className="breadcrumbs-arrow">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                        <path d="M4.5 2.47913L8.25 6.22913L4.5 9.97913" stroke="#808080"></path>
                      </svg>
                    </div>

                    <div className="breadcrumbs-content" style={{color:"#A9A9A9", fontFamily:"poppins"}}>
                        Shoes Collection
                    </div>
                  </div>
                </div>
              </div>

              <div className="Allcollections">
                <Allcollections></Allcollections>
              </div>
          </div>
    </>
  )
}

export default ProductDetail