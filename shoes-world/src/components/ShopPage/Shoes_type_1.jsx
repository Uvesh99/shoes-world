import "./Shoes_type_1.css";
import Card from 'react-bootstrap/Card';
// import shoes_1 from "../../assets/Products_card/shoes_1.png";
import shoes_1 from "../../assets/ProductPage/shoesx1.png";
import Add_cart from "../AddtoCart_Button/Add_cart";
import Shoes_feature from "./Shoes_feature";
import { Link } from "react-router-dom";

function Shoes_type_1() {

  return (
    <>
        <div className="shoe-type-1">
            <div className="cads">

                <div className="type-1">

                <Link to={"/shoes/1"}>
                  <div className="card-1">
                  <Card style={{ width: '20rem', border:"1px solid black"}}>
                     <Card.Img variant="top" src={shoes_1} className="img"/>
                       <Card.Body>
                         <Card.Title>
                         <p className="inner_product_title">Whoosh Lite Sneakers</p>
                         </Card.Title>
                            <Card.Text>
                             <p className="color">Red</p>
                            </Card.Text>
                            <Card.Text>
                              <span className="price">Rs. 1400</span> <span className="notPrice">Rs. 1599</span>
                            </Card.Text> 
                        </Card.Body>
                    </Card>
                    <Add_cart></Add_cart>
                    </div>
                  </Link>   

                    <div className="card-2">
                  <Card style={{ width: '20rem', border:"1px solid black"}}>
                     <Card.Img variant="top" src={shoes_1}/>
                       <Card.Body>
                         <Card.Title>
                         <p className="inner_product_title">Whoosh Lite Sneakers</p>
                         </Card.Title>
                            <Card.Text>
                            <p className="color">Red</p>
                            </Card.Text>
                            <Card.Text>
                              <span className="price">Rs. 1400</span> <span className="notPrice">Rs. 1599</span>
                            </Card.Text> 
                        </Card.Body>
                    </Card>
                    <Add_cart></Add_cart>
                    </div>

                    <div className="card-3">
                  <Card style={{ width: '20rem', border:"1px solid black"}}>
                     <Card.Img variant="top" src={shoes_1}/>
                       <Card.Body>
                         <Card.Title>
                         <p className="inner_product_title">Whoosh Lite Sneakers</p>
                         </Card.Title>
                            <Card.Text>
                            <p className="color">Red</p>
                            </Card.Text>
                            <Card.Text>
                              <span className="price">Rs. 1400</span> <span className="notPrice">Rs. 1599</span>
                            </Card.Text> 
                        </Card.Body>
                    </Card>
                    <Add_cart></Add_cart>
                    </div>

                    <div className="card-4">
                  <Card style={{ width: '20rem', border:"1px solid black"}}>
                     <Card.Img variant="top" src={shoes_1}/>
                       <Card.Body>
                         <Card.Title>
                         <p className="inner_product_title">Whoosh Lite Sneakers</p>
                         </Card.Title>
                            <Card.Text>
                            <p className="color">Red</p>
                            </Card.Text>
                            <Card.Text>
                              <span className="price">Rs. 1400</span> <span className="notPrice">Rs. 1599</span>
                            </Card.Text> 
                        </Card.Body>
                    </Card>
                    <Add_cart></Add_cart>
                    </div>
                </div>

                <div className="type-2 ProductInfos">
                    <a href="#" className="product_title_">
                     <p className="product_title1">ELEVATED BASICS</p>
                    </a>
                    <Shoes_feature></Shoes_feature>
                </div>

                <div className="cads">

                <div className="type-1">

                  <div className="card-1">
                  <Card style={{ width: '20rem', border:"1px solid black"}}>
                     <Card.Img variant="top" src={shoes_1} className="img"/>
                       <Card.Body>
                         <Card.Title>
                         <p className="inner_product_title">Whoosh Lite Sneakers</p>
                         </Card.Title>
                            <Card.Text>
                             <p className="color">Red</p>
                            </Card.Text>
                            <Card.Text>
                              <span className="price">Rs. 1400</span> <span className="notPrice">Rs. 1599</span>
                            </Card.Text> 
                        </Card.Body>
                    </Card>
                    <Add_cart></Add_cart>
                    </div>

                    <div className="card-2">
                  <Card style={{ width: '20rem', border:"1px solid black"}}>
                     <Card.Img variant="top" src={shoes_1}/>
                       <Card.Body>
                         <Card.Title>
                         <p className="inner_product_title">Whoosh Lite Sneakers</p>
                         </Card.Title>
                            <Card.Text>
                            <p className="color">Red</p>
                            </Card.Text>
                            <Card.Text>
                              <span className="price">Rs. 1400</span> <span className="notPrice">Rs. 1599</span>
                            </Card.Text> 
                        </Card.Body>
                    </Card>
                    <Add_cart></Add_cart>
                    </div>

                    <div className="card-3">
                  <Card style={{ width: '20rem', border:"1px solid black"}}>
                     <Card.Img variant="top" src={shoes_1}/>
                       <Card.Body>
                         <Card.Title>
                         <p className="inner_product_title">Whoosh Lite Sneakers</p>
                         </Card.Title>
                            <Card.Text>
                            <p className="color">Red</p>
                            </Card.Text>
                            <Card.Text>
                              <span className="price">Rs. 1400</span> <span className="notPrice">Rs. 1599</span>
                            </Card.Text> 
                        </Card.Body>
                    </Card>
                    <Add_cart></Add_cart>
                    </div>

                    <div className="card-4">
                  <Card style={{ width: '20rem', border:"1px solid black"}}>
                     <Card.Img variant="top" src={shoes_1}/>
                       <Card.Body>
                         <Card.Title>
                         <p className="inner_product_title">Whoosh Lite Sneakers</p>
                         </Card.Title>
                            <Card.Text>
                            <p className="color">Red</p>
                            </Card.Text>
                            <Card.Text>
                              <span className="price">Rs. 1400</span> <span className="notPrice">Rs. 1599</span>
                            </Card.Text> 
                        </Card.Body>
                    </Card>
                    <Add_cart></Add_cart>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Shoes_type_1