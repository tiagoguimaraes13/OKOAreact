import { useDemoLanguage } from "../../i18n/DemoLanguage";
import React from 'react';
import { Link } from 'react-router-dom';
export const Footer = () => {
  const {
    tr
  } = useDemoLanguage();
  return <footer className="okoa-footer"><h2>OKOA</h2><p>{tr("Other Kind Of Art \xB7 Independent website concept")}</p><nav><Link to="/ourart">{tr("Collection")}</Link><Link to="/aboutus">{tr("About the concept")}</Link><Link to="/cart">{tr("Demo basket")}</Link></nav><p>{tr("Created by TOIMU Technologies O\xDC. Artwork prices and specifications are illustrative. No orders are processed.")}</p></footer>;
};
