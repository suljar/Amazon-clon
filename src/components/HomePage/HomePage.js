import React,{Component} from "react";
import Product from "../Products/Product"
import "./HomePage.css";
import  {PRODUCTS} from "../../shared/products"


class Home extends Component  {
    
    constructor(){
      super();
      this.state = { 

        products :  PRODUCTS

      }
    }
  
  render() {
    return (
      <div className="home">

        
        
          <div className="home__contanier">
            <img
              className="home__img"
              src="https://images-na.ssl-images-amazon.com/images/G/01/img20/events/Q4/Holiday/Gifthub/gateway/hol20_gifthub_gw_hero_desktop_c_1x._CB405398820_.jpg"
              alt="homeimg"
            /> 
      
            <div className="container">
           
             
                    <Product products ={this.state.products}/>
           
              
            </div>
          </div>
      </div>
  
    )}
}

export default Home;