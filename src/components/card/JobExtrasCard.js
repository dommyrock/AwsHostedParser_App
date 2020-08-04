import React from "react";
import { extras_div } from "../../css/jobExtrasCard.module.css";
import CalculatorIcon from "./icons/CalculatorIcon";
import PostIcon from "./icons/PostIcon";
import RangeIcon from "./icons/RangeIcon";
import ListIcon from "./icons/ListIcon";
import GraphIcon from "./icons/GraphIcon";

//TODO: after all basic layout is done and we show/filter real data do this ....because this is not priority

const JobExtrasCard = () => {
  return (
    <div className={extras_div} style={{ fontWeight: "700px" }}>
      <h4>
        <CalculatorIcon width={18} height={18} />
        Salary calculator
      </h4>
      <h4>
        <PostIcon width={18} height={18} />
        Original post
      </h4>
      <h4>
        <RangeIcon width={18} height={18} />
        Salary ranges
      </h4>
      <h4>
        <ListIcon width={21} height={21} />
        Similar jobs
      </h4>
      <h4>
        <GraphIcon width={18} height={18} />
        Cost of living
      </h4>
    </div>
  );
};

export default JobExtrasCard;
