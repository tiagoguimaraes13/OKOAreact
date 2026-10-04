import './Cart.css';
import { useDemoLanguage } from "../../i18n/DemoLanguage";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export const Cart = ({
  cart,
  removeFromCart,
  updateQuantity,
  total
}) => {
  const {
    tr,
    language
  } = useDemoLanguage();
  const [reviewing, setReviewing] = useState(false);

  const money = value => new Intl.NumberFormat(language, {
    style: 'currency',
    currency: 'EUR'
  }).format(value);

  return <section className="cart-container"><h1>{tr("Your basket")}</h1><p>{tr("Portfolio demonstration. Prices and availability are illustrative; no orders or payments are processed.")}</p>
    {cart.length === 0 ? <div className="empty-cart"><p>{tr("Your basket is empty.")}</p><Link to="/ourart">{tr("Explore the collection \u2192")}</Link></div> : <><div className="cart-items">{cart.map(item => {
          return <article className="cart-item" key={item.id}><div className="cart-item-image"><img src={item.imgSrc} alt={tr(item.name)} /></div><div className="cart-item-details"><h2>{tr(item.name)}</h2><p>{tr(item.selectedSize)} · {tr(item.selectedColor)}</p><p>{money(item.price)}</p><div className="quantity-controls"><button aria-label={tr("Decrease quantity of {product}", {
                  product: tr(item.name)
                })} onClick={() => {
                  updateQuantity(item.id, item.quantity - 1);
                  setReviewing(false);
                }}>−</button><span aria-label={tr("Quantity")}>{item.quantity}</span><button aria-label={tr("Increase quantity of {product}", {
                  product: tr(item.name)
                })} onClick={() => {
                  updateQuantity(item.id, item.quantity + 1);
                  setReviewing(false);
                }}>+</button></div><button onClick={() => {
                removeFromCart(item.id);
                setReviewing(false);
              }}>{tr("Remove")}{" "}{tr(item.name)}</button></div><strong>{money(item.price * item.quantity)}</strong></article>;
        })}</div><div className="cart-summary"><p>{tr("Items subtotal")}<strong>{money(total)}</strong></p><p>{tr("Delivery and taxes are not calculated in this concept.")}</p><button className="okoa-button" onClick={() => setReviewing(true)}>{tr("Preview order")}</button></div>{reviewing && <div role="status" className="cart-summary"><h2>{tr("Order preview")}</h2><p>{cart.reduce((count, item) => count + item.quantity, 0)}{" "}{tr("items \xB7")}{" "}{money(total)}</p><p>{tr("This is a demonstration. No order has been placed and nothing has been charged.")}</p><Link to="/ourart">{tr("Continue browsing \u2192")}</Link></div>}</>}
  </section>;
};
