import Shoes_feature from "./Shoes_feature";
import Shoes_type_1 from "./Shoes_type_1";
import "./Allcollections.css";

function Allcollections() {
 
  return (
    <>
        <div className="ProductInfos">
              <a href="#" className="product_title_">
                <p className="product_title1">WHOOSH LITE SNEAKERS</p>
              </a>

            <Shoes_feature></Shoes_feature>
        </div>

        <div className="shoes-container-cllection">
            <Shoes_type_1></Shoes_type_1>
        </div>
        
    </>
  )
}

export default Allcollections