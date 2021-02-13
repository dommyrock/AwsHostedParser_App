import { useRef } from "react";
import PropTypes from "prop-types";
import { container, inner } from "../../css/jobShare.module.css";

export default function ShareJob({ mailto, clipboardText }) {
  const inputRef = useRef(null);

  return (
    <div className={container}>
      <h3 id="link-share-heading--92583004368446150">Share</h3>
      <p>
        <a
          href="mailto:?subject=Infrastructure%20Architect%2C%20Google%20Cloud%20Professional%20Services&amp;body=Check%20out%20this%20job%3A%20https%3A%2F%2Fcareers.google.com%2Fjobs%2Fresults%2F92583004368446150%2F."
          data-gtm-ref="job-actions-email-to-a-friend"
        >
          Email job link
        </a>
      </p>
      <div
        className={inner}
        onClick={() => {
          navigator.clipboard.writeText(inputRef.current.value);
        }}
      >
        <h3 for="copy-job-url-field--92583004368446150">Job link:</h3>
        <div>
          <input
            id="copy-job-url-field--92583004368446150"
            data-gtm-ref="job-actions-copy-input"
            type="text"
            value={clipboardText}
            readOnly="readonly"
            ref={inputRef}
          />
          <button
            aria-label="Copy the URL for this job"
            data-gtm-ref="job-actions-copy-link"
            onClick={() => {
              navigator.clipboard.writeText(inputRef.current.value);
            }}
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}
ShareJob.propTypes = {
  mailto: PropTypes.string,
  clipboardText: PropTypes.string,
};
