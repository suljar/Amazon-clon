import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__contanier">
        <img
          className="home__img"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg?fbclid=IwAR3hUfq1nlFveVkKQyGo0rciRlKhfvZlArVj3-mzW8V8jgjx_G0BiTOVK7U"
          alt="homeimg"
        />
        <div className="home__row">
          <Product
            id="39839739"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.8}
            img="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
            rate={5}
          />
          <Product
            id="1239849"
            title="Nurxiovo 3 in 1 Stand Mixer 850W 6 Speed Tilt-Head Kitchen Mixer with 6.5QT Mixer with Stainless Steel Bowl, Dough Hook Whisk Beater, Multifunction Standing Mixers, Meat Blender and Juice Extracter Black"
            price={239}
            img="https://m.media-amazon.com/images/I/61sOuao57DL._AC_UY218_.jpg"
            rate={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="9383983"
            title="H4 Fitness Health 2in1 Smart Watch for Men Women Smartwatch with All-Day Heart Rate/Blood Pressure/Sleep Monitor IP67 Waterproof Sports Activitity Tracker Bluetooth"
            price={175.78}
            img="https://m.media-amazon.com/images/I/518mLHETIeL._AC_UY218_.jpg"
            rate={4}
          />
          <Product
            id="8374733"
            title="Certified Refurbished Echo (3rd Gen)- Smart speaker with Alexa- Charcoal"
            price={98.8}
            img="https://m.media-amazon.com/images/I/61Gob-M3snL._AC_UY218_.jpg"
            rate={3}
          />
          <Product
            id="6534635"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation)"
            price={1149}
            img="https://m.media-amazon.com/images/I/81SGb5l+lZL._AC_UY218_.jpg"
            rate={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="2937380"
            title="Samsung 32-Inch UR590C UHD 4K Curved Gaming Monitor (LU32R590CWNXZA) – 60Hz Refresh, Widescreen Computer Monitor, 3840 x 2160p Resolution, 4ms Response, Game"
            price={449}
            img="https://m.media-amazon.com/images/I/91BlpmYWl-L._AC_UY218_.jpg"
            rate={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;