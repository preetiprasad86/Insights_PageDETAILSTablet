import React from "react";
import Frame144 from "../Frame144";
import Footer from "../Footer";
import "./X07InsightsPageDETAILSTablet.css";

function X07InsightsPageDETAILSTablet(props) {
  const {
    bbmp,
    rectangle76,
    text1,
    text2,
    image9,
    spanText,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    frame144Props,
    footerProps,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="x07-insights-page-details-tablet screen">
        <Frame144 group86Props={frame144Props.group86Props} iconMenuProps={frame144Props.iconMenuProps} />
        <h1 className="title valign-text-middle typographyheadlineh4-extrabold-24">{bbmp}</h1>
        <img className="rectangle-76" src={rectangle76} />
        <p className="text-1 typography-body-smalltext-14-regular">{text1}</p>
        <div className="text-2 valign-text-middle typographyheadlineh4-extrabold-24">{text2}</div>
        <img className="image-9" src={image9} />
        <p className="text-3 valign-text-middle typographybody16-regular">
          <span>
            <span className="span0 typographybody16-regular">{spanText}</span>
            <span className="span overpass-semi-bold-mahogany-16px">{spanText2}</span>
            <span className="span overpass-semi-bold-shark-16px">{spanText3}</span>
            <span className="span overpass-semi-bold-silver-16px">{spanText4}</span>
            <span className="span overpass-semi-bold-shark-16px">{spanText5}</span>
            <span className="span overpass-semi-bold-mahogany-16px">{spanText6}</span>
            <span className="span overpass-semi-bold-shark-16px">{spanText7}</span>
            <span className="span overpass-semi-bold-silver-16px">{spanText8}</span>
            <span className="span overpass-semi-bold-shark-16px">{spanText9}</span>
            <span className="span overpass-semi-bold-mahogany-16px">{spanText10}</span>
          </span>
        </p>
        <Footer {...footerProps} />
      </div>
    </div>
  );
}

export default X07InsightsPageDETAILSTablet;
