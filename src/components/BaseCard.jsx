import React from "react";
import SiteName from "./SiteName";
import Tabs from "./Tabs";
import CardItems from "./CardItems";

const BaseCard = ({ data }) => {
  return (
    <div className="card">
      <div className="cardHeader">
        <SiteName />

        <Tabs />
      </div>
      <div className="cardBody">{data && <CardItems data={data} />}</div>
    </div>
  );
};

export default BaseCard;
