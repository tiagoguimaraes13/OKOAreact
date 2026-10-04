import { useDemoLanguage, DemoLanguageSwitcher } from "../../i18n/DemoLanguage";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export const NavBar = ({
  cartItemCount
}) => {
  const {
    tr
  } = useDemoLanguage();
  const [open, setOpen] = useState(false);
  return <><header className="okoa-nav"><DemoLanguageSwitcher /><Link className="okoa-wordmark" to="/">OKOA<span>{tr("OTHER KIND OF ART")}</span></Link><button className="okoa-menu" onClick={() => setOpen(!open)} aria-expanded={open}>{tr("Menu")}</button><nav className={open ? 'open' : ''} aria-label={tr("Main navigation")} onClick={() => setOpen(false)}><Link to="/ourart">{tr("Collection")}</Link><Link to="/aboutus">{tr("The concept")}</Link><Link to="/location">{tr("Visit")}</Link></nav><Link to="/cart" aria-label={tr("Basket, {count} items", {
        count: cartItemCount
      })}>{tr("Basket")} ({cartItemCount})</Link></header><aside className="okoa-demo">{tr("Independent website concept by TOIMU. Not an official gallery website; no purchases are processed.")}</aside></>;
};
