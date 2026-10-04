import { useDemoLanguage } from "../../i18n/DemoLanguage";
import React from 'react';
import { Link } from 'react-router-dom';
export const Location = () => {
  const {
    tr
  } = useDemoLanguage();
  return <section className="okoa-page"><p className="okoa-kicker">{tr("VISIT PLANNING CONCEPT")}</p><h1>{tr("A space for")}<br />{tr("the unexpected.")}</h1><p>{tr("A future official website could publish confirmed gallery locations, opening hours and exhibition details here. This independent demonstration does not provide verified visitor information.")}</p><Link className="okoa-button" to="/ourart">{tr("Browse the collection")}</Link></section>;
};
