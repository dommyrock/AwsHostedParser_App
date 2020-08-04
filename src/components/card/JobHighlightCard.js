import React from "react";
import PropTypes from "prop-types";
import PinIcon from "./icons/PinIcon";
import { layout_div } from "../../css/jobHighlightCard.module.css";
//this is v1 layout ... will improve/replace later
//TODO: load real data and change state of this component with fresh "cliked"data (default to item[0] st first later show stats intead
/* Maybe try open details in modal and list rest in details window, or make div scrollable... */
/* NOTE :Also if i make it scrollable  , snap to page top on icon click ..if item is far down...
  --add css outline to selected job card so we know wher we left of
  --maybe add "modal" tooltip open on "quick view" click/hover with only "basic Qualifications"
  https://github.com/tvkhoa/react-tippy (lightweight) 
  or
  https://github.com/wwayne/react-tooltip
  */
/* NOTE If none is working fine , make it similar to linkedin */
const JobHighlightCard = ({ data }) => {
  return (
    <div id="highlight_div" className="highhlight_div-scrollbar">
      <div className={layout_div}>
        <h4>
          <span>{mockData.title}</span>
        </h4>
        <h4>
          <img width={60} height={60} src={mockData.logo_Url} />
          <span>
            {mockData.company + "  "}
            <PinIcon width={20} height={20} />
            {mockData.location}
          </span>
        </h4>
        {/* This could maybe be in tooltip on company name/logo hover */}
        <h4>{mockData.employees}</h4>
        <h4>{mockData.seniority}</h4>
        <h4>{mockData.employmentType}</h4>

        <span>
          <strong>
            <u>
              Description
              <br />
              <br />
            </u>
          </strong>
          {mockData.description}
          <br />
          <strong>
            <u>
              Basic Qualifications
              <br />
            </u>
          </strong>
          {mockData.qualificationText}
          <strong>
            <u>
              Preferred Qualifications
              <br />
            </u>
          </strong>
          {mockData.preferredQualText}
        </span>

        <h3>{"Industry:  " + mockData.industry}</h3>
      </div>
    </div>
  );
};
JobHighlightCard.propTypes = {
  data: PropTypes.object,
};
export default JobHighlightCard;

//Add mock description , job title. company name , post date, number of apliicants ?,company size ...json here
const mockData = {
  title: "Software Development Engineer II",
  //note: when lnkdn data is scraped save logocdn as prop , than map it instead of this
  logo_Url:
    "https://media-exp1.licdn.com/dms/image/C560BAQFdwVGpSOHmgw/company-logo_100_100/0?e=1604534400&v=beta&t=2v6HGYAVYo7-SQMtYR9L3tuK3lmG-XDJVtJLSi6Mgyo",
  location: "Seattle, WA, US",
  company: "Amazon",
  employees: "10001+ employees",
  industry: "Computer Software , Information Technology & Services ,Internet",
  applicants: 45,
  seniority: "Mid-Senior level",
  employmentType: "Full-time",
  jobFunctions: "Information Technology  Consulting  Engineering",
  description: `Amazon FreeTime Unlimited brings together all types of content that kids and parents love, including books, Audible books, movies, TV shows, educational apps and games, plus a child-friendly Alexa experience. It provides peace of mind for parents with award-winning parental controls and monitoring through Parent Dashboard, and a world of fun for kids where they can choose from thousands of the most popular titles and age-appropriate content, all hand-selected by the FreeTime team. FreeTime is available on Fire Tablets, Fire TV, Kindle e-readers, compatible Android and iOS mobile devices, and compatible Alexa devices. More information can be found at http://www.amazon.com/freetime.
  Do you want to create and deliver innovate consumer software products for millions of customers around the world? We are growing and looking for a talented Software Development Engineer to join the Amazon FreeTime team. You will be responsible for developing customer-facing features in the mobile client space from inception to delivery and beyond. You will have an opportunity to design, architect and build innovative consumer products for iOS and Android using ReactNative. Your product and features will be used every day by people you know.
  Our goal is to create a revolutionary experience for parents and kids to enjoy on our Amazon family of devices, as well as Android and iOS devices. Working for Amazon FreeTime offers a creative, fast-paced, entrepreneurial work environment where you will be at the center of Amazon innovation. We have gained critical acclaim and won the prestigious KAPi (Kids at Play Interactive) award in 2013 and 2019. Come help build the future of Amazon devices and services!
  
  Amazon is an Equal Opportunity Employer – Minority / Women / Disability / Veteran / Gender Identity / Sexual Orientation / Age.`,

  qualificationText: (
    <ul>
      <li> 2+ years of non-internship professional software development experience</li>
      <li>
        Programming experience with at least one modern language such as Java, C++, or C# including object-oriented
        design
      </li>
      <li>
        1+ years of experience contributing to the architecture and design (architecture, design patterns, reliability
        and scaling) of new and current systems.
      </li>
      <li> Bachelor's degree or higher in Computer Science or related field</li>
      <li>Strong knowledge of CS fundamentals including data structures, algorithm design and complexity analysis</li>
      <li> Proficiency in at least one object-oriented programming language such as Java, C++ or C#</li>
      <li> Broad technical depth and knowledge of mobile devices, applications and technologies</li>
      <li>
        Excellent communication, analytical and problem solving skills
        <br />
      </li>
    </ul>
  ),
  preferredQualText: (
    <ul>
      <li> Excellent communication, analytical and problem solving skills</li>
      <li> Proven track record of taking ownership and successfully delivering results</li>
      <li>
        Knowledge of professional software engineering best practices for the complete software development life cycle,
        including coding standards, code reviews, source control management, build processes, testing and deployment
        <br />
        <br />
      </li>
    </ul>
  ),
};
