import { useDemoLanguage } from "../../i18n/DemoLanguage";
import React from 'react';
import { Link } from 'react-router-dom';
import eye from '../../assets/eye3.jpg';
import splash from '../../assets/splash3.jpg';
import galaxy from '../../assets/galaxy2.jpg';
export const HomePage = () => {
  const {
    tr
  } = useDemoLanguage();
  return <div className="okoa-home"><section className="okoa-hero"><div className="okoa-hero-text"><p className="okoa-kicker">{tr("OKOA / OTHER KIND OF ART")}</p><h1>{tr("A different")}<br />{tr("way to")}{" "}<em>{tr("see.")}</em></h1><p>{tr("Colour, texture and a little unexpected perspective. Explore the collection.")}</p><Link className="okoa-button" to="/ourart">{tr("Explore artworks")}</Link><span className="okoa-edition">{tr("INDEPENDENT GALLERY WEBSITE CONCEPT / 2026")}</span></div><div className="okoa-hero-art"><img src={eye} alt={tr("The Eye artwork")} fetchPriority="high" /><span>{tr("01 / THE EYE")}</span></div></section><div className="okoa-ticker" aria-hidden="true"><span>{tr("OTHER KIND OF ART / COLOUR / PERSPECTIVE / OTHER KIND OF ART / COLOUR / PERSPECTIVE /")}</span></div><section className="okoa-selected"><div className="okoa-section-heading"><h2>{tr("New perspectives.")}</h2><Link to="/ourart">{tr("View the collection")}</Link></div><div className="okoa-selected-grid"><Link to="/ourart"><img src={splash} alt={tr("Splash artwork")} loading="lazy" /><h3>{tr("Splash")}</h3><p>{tr("A study in movement and colour.")}</p></Link><Link to="/ourart"><img src={galaxy} alt={tr("Galaxy artwork")} loading="lazy" /><h3>{tr("Galaxy")}</h3><p>{tr("A glimpse into another world.")}</p></Link></div></section><section className="okoa-manifesto"><p className="okoa-kicker">{tr("BEYOND THE EXPECTED")}</p><h2>{tr("Art doesn't have to")}<br />{tr("match the room.")}<br /><em>{tr("It can change it.")}</em></h2><Link to="/aboutus">{tr("Inside the concept")}</Link></section></div>;
};
