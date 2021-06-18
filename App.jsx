import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import X07InsightsPageDETAILSTablet from "./components/X07InsightsPageDETAILSTablet";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|07-insights-page-details-tablet)">
          <X07InsightsPageDETAILSTablet {...x07InsightsPageDETAILSTabletData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const whiteData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-98@2x.svg",
};

const group86Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85@2x.svg",
    whiteProps: whiteData,
};

const iconMenuData = {
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-159@2x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-159@2x.svg",
};

const frame144Data = {
    group86Props: group86Data,
    iconMenuProps: iconMenuData,
};

const facebookAppSymbolData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/f-1-1@2x.svg",
};

const instagramData = {
    instagram: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-60@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-19@2x.svg",
};

const twitterData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-157@2x.svg",
};

const group87Data = {
    facebookAppSymbolProps: facebookAppSymbolData,
    facebookAppSymbolProps2: instagramData,
    twitterProps: twitterData,
};

const footerData = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-25@2x.svg",
    place: "Contact",
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-49@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-21@2x.svg",
    phone: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-212@2x.svg",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-231@2x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-232@2x.svg",
    text42: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    text3: "+91 8976535221, +91 8755645342",
    contactWebuildCom: "contact@webuild.com",
    quickLinks: "Quick Links",
    aboutUs: "About Us",
    projects: "Projects",
    gallery: "Gallery",
    knowledgeTransfer: "Knowledge Transfer",
    blogs: "Blogs",
    faqs: "FAQ’s",
    group87Props: group87Data,
};

const x07InsightsPageDETAILSTabletData = {
    bbmp: "BBMP",
    rectangle76: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-76-7@1x.png",
    text1: "The Bruhat Bengaluru Mahanagara Palike or the BBMP is the authority managing the innumerable infrastructure and civic amenities in Greater Bengaluru. Therefore, getting clearance and approval from the BBMP before implementing the building construction is a crucial step. The BBMP authorities have the power to demolish the building already constructed or levy a huge price as a penalty for illegal construction under its jurisdiction.   However, you can be guaranteed that by following the right procedure with the submission of appropriate documents and paying the prescribed fee, the verification will be done by the concerned BBMP authorities and you will have all your documents approved and clearance within a span of 30 days.",
    text2: "How to submit building plan approval application?",
    image9: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/image-9-2@1x.png",
    spanText: <>The application forms for approval can be downloaded from the official website: ___ and submitted online or offline.<br />The choice of forms and the authorized officer to sanction the application is dependent on the size of the building plan. The different forms are attached for your perusal to give you better clarity on the terms and details asked in the set documents.<br />By duly filling in the suitable application form according to your building size and submitting the following original documents along will enable a hassle-free process <br /><br /></>,
    spanText2: "  Latest BBMP Khata Certificate",
    spanText3: "   ",
    spanText4: " |",
    spanText5: "    ",
    spanText6: "Latest Khata Extract ",
    spanText7: "   ",
    spanText8: "|",
    spanText9: "   ",
    spanText10: " Latest Tax Paid Receipt",
    frame144Props: frame144Data,
    footerProps: footerData,
};

