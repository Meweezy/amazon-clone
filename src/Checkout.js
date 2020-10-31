import React, { forwardRef } from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import FlipMove from "react-flip-move";
import { v4 as uuidv4 } from "uuid";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  console.log(uuidv4());

  const FunctionalArticle = forwardRef((props, ref) => (
    // <div ref={ref}>{props.articleName}</div>
    <CheckoutProduct
      id={props.id}
      title={props.title}
      image={props.image}
      price={props.price}
      rating={props.rating}
    />
  ));
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          <FlipMove
            duration={500}
            delay={10}
            easing={"cubic-bezier(0.25, 0.5, 0.75, 1)"}
            staggerDurationBy={30}
            staggerDelayBy={10}
          >
            <h2>
              {basket.map((item) => (
                // <CheckoutProduct
                //   id={item.id}
                //   title={item.title}
                //   image={item.image}
                //   price={item.price}
                //   rating={item.rating}
                // />
                <FunctionalArticle key={item.id} {...item} />
              ))}
            </h2>
          </FlipMove>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
