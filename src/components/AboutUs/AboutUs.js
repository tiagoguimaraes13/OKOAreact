import { useDemoLanguage } from "../../i18n/DemoLanguage";
import React from 'react';
import { Link } from 'react-router-dom';
export const AboutUs = () => {
  const {
    tr
  } = useDemoLanguage();
  return <section className="okoa-page"><p className="okoa-kicker">{tr("INSIDE THE CONCEPT")}</p><h1>{tr("Another kind")}<br />{tr("of perspective.")}</h1><p>{tr("This independent website concept explores how an art collection can be presented with space, personality and a focus on the work itself.")}</p><p>{tr("The collection, basket and artwork details demonstrate a digital gallery experience. Business information and exhibition details need confirmation before an official launch.")}</p><Link className="okoa-button" to="/ourart">{tr("Explore artworks")}</Link></section>;
};
