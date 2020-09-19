import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/03/digital/video/gateway/launch/CTA_TEST/THEBOYSS2/THBY_S2_GWBleedingHero_P_COVIDUPDATE_XSite_3000X1200_PV_de-DE._CB404811843_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="123456789"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/510AO7UjVPL._SX331_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="856554863"
            title="Bluetooth headphones, Cshidworld Wireless headphones with Bluetooth 5.0 TWS Noise Canceling Headset In-ear headphones HiFi APT-X CVC8.0 with microphone and 30H playing time, charging box with waterproof"
            price={125.74}
            image="https://images-na.ssl-images-amazon.com/images/I/51WwcwEx2VL._AC_SL1200_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="254638975"
            title="Garmin Forerunner 735XT GPS watch, black / gray, M, 010-01614-06"
            price={196.9}
            image="https://images-na.ssl-images-amazon.com/images/I/61t5TRsxh2L._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="874156392"
            title="LG OLED65CX9LA 164 cm (65 inch) OLED TV (4K, Dolby Vision, Dolby Atmos) [model year 2020 ]"
            price={2329.0}
            image="https://images-na.ssl-images-amazon.com/images/I/918vuhI7%2BQL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="214568973"
            title="The Last of Us Part II - Exclusive Steelbook Edition [PlayStation 4] (Uncut)"
            price={61.99}
            image="https://images-na.ssl-images-amazon.com/images/I/91Xl30gA6rL._SL1500_.jpg"
            rating={5}
          />
          <Product
            id="321546897"
            title="Bauknecht GT 219 A3 + freezer / A +++ / freezer: 215 L / energy consumption: 120 kWh / year / [energy class A +++]"
            price={315.0}
            image="https://images-na.ssl-images-amazon.com/images/I/61yXUmhOXVL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="459654219"
            title="Russell Hobbs COOK @ HOME Multicooker 21850-56"
            price={315.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71aufWmMK8L._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
