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
      <div>
        <h4>
          <CalculatorIcon width={18} height={18} />
          Salary calculator
        </h4>
      </div>
      <div>
        <h4>
          <PostIcon width={18} height={18} />
          Original post
        </h4>
      </div>

      <div>
        <h4>
          <RangeIcon width={18} height={18} />
          Salary ranges
        </h4>
      </div>

      <div>
        <h4>
          <ListIcon width={20} height={20} />
          Similar jobs
        </h4>
      </div>

      <div>
        <h4>
          <GraphIcon width={18} height={18} />
          Cost of living
        </h4>
      </div>
    </div>
  );
};

export default JobExtrasCard;

/**
 * NEUMORPHIC CSS TODO

  1
  #8dadc9
  or
  #8698a7

  border-radius: 28px;
  background: #8dadc9;
  box-shadow:  27px 27px 55px #728ca3,
              -27px -27px 55px #a8ceef;


  narrow/tighter
  #88bce7
  or
  #87bce8
  or
  #d8e4ee

  border-radius: 28px;
  background: #88bce7;
  box-shadow:  7px 7px 14px #74a0c4,
              -7px -7px 14px #9cd8ff;
 */
