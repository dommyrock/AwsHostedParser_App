import PropTypes from "prop-types";
import Link from "next/link";
import { memo, useEffect, useRef } from "react";
import {
  job_a_class,
  job_card_header,
  job_card_title,
  job_card_button,
  job_div_flex_row,
  job_flex,
  job_tags,
  pre_card_content,
} from "../../css/jobCard.module.css";

const JobCardV2 = memo(({ job }) => {
  const divRef = useRef(null);
  //TODO : For mobile view remove short description and just show titele and locations
  debugger;
  useEffect(() => {
    divRef.current.innerHTML = job.summary;
  }, []);
  return (
    <li>
      <Link href="https://careers.google.com/jobs/results/">
        <a className={job_a_class}>
          <div itemScope="itemscope" itemType="http://schema.org/JobPosting">
            <div className={job_card_header}>
              <ul style={{ float: "right" }}>
                <li>
                  <div>
                    <button
                      aria-label="Share Director, Cloud Business &amp; Systems Resilience Programs"
                      className={job_card_button}
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        role="presentation"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ marginRight: "8px" }}
                      >
                        <g>
                          <path d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
                        </g>
                      </svg>
                      Share
                    </button>
                  </div>
                </li>
                {/* TODO : ADD Company icon here if it exists in cdn else show default svg */}
              </ul>
              <h2 itemProp="title" className={job_card_title}>
                {job.job_title}
              </h2>
              <div className={job_div_flex_row}>
                <ul className={`${job_tags} ${job_flex}`}>
                  <li
                    itemScope="itemscope"
                    itemType="http://schema.org/Organization"
                    itemProp="hiringOrganization"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      role="presentation"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z"></path>
                        <path d="M0 0h24v24H0z" fill="none"></path>
                      </g>
                    </svg>
                    <span itemProp="name">Google</span>
                    <meta
                      content="/jobs/dist/img/assets/g-logo.5fe50104e092c1d56f8cb7575e9a1766.png"
                      itemProp="logo"
                    />
                  </li>
                  <li
                    itemScope="itemscope"
                    itemType="http://schema.org/Place"
                    itemProp="jobLocation"
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 18 24"
                      role="presentation"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                        <path d="M0 0h24v24H0z" fill="none"></path>
                      </g>
                    </svg>
                    <div
                      itemProp="address"
                      itemScope="itemscope"
                      itemType="http://schema.org/PostalAddress"
                      style={{ display: "flex" }}
                    >
                      <div itemProp="addressLocality">Sunnyvale</div> <div>,&nbsp;</div>
                      <div itemProp="addressRegion">CA</div> <div>,&nbsp;</div>
                      <div itemProp="addressCountry">USA</div>
                    </div>
                  </li>
                </ul>
              </div>
              <meta
                content="In this role, you will join the Enterprise Resilience Services team in Global Security and Resilience Services (GSRS) to lead the Cloud area ecosystem in the acceleration of innovative business and systems resilience programs. Not unlike Google’s forward-looking technology, our approach to enterprise resilience takes business continuity to the next level. Through a coordinated security and resilience program framework, we are helping teams meet enterprise and user expectations during times of disruption.  In this role, you will collaborate with global GSRS peers, business continuity, reliability experts and Cloud professionals who are responsible for resilience within different parts of Cloud and Google. You will execute a variety of business and systems resilience projects through tasks and actions along a time management continuum. You will focus on meeting program commitments, including ongoing communications with management sponsors, customer stakeholders and project teams. You will help to implement the integrated framework and processes that encourage interconnected readiness and response protocols as we embrace an all-hazards, risk-based approach to incident management. You will work with compliance teams to ensure we are resilience ready, and with continual improvement at Google’s core, you will work with analytics teams to monitor and report on performance.From keeping Googlers safe and secure to managing disruptive events, the ability to anticipate, deter, detect, and act are the pillars of Google’s Global Security and Resilience Services (GSRS) team. As a member of GSRS you will help develop a culture where safety, security and resiliency are integrated into every facet of Google, including the creative process. You will help us continually identify, evaluate and monitor enterprise risks that could affect business activities and provide business leaders the information they need to make critical decisions. You'll collaborate with cross-functional teams to create innovative strategies and develop programs that drive sustainable effectiveness."
                itemProp="description"
              />
              <meta content="2021-02-05T23:30:43.614Z" itemProp="datePosted" />
            </div>
            <div className={pre_card_content}>
              <h3 class="gc-job-qualifications-header gc-heading gc-heading--delta">
                Qualifications:
              </h3>
              <div
                itemProp="qualifications"
                class="gc-card__preview gc-job-qualifications gc-job-qualifications--preview gc-user-generated-content"
                ref={divRef}
              ></div>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
});
JobCardV2.propTypes = {
  job: PropTypes.object.isRequired,
};
export default JobCardV2;
