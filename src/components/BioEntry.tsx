import React from "react";
import { BioEntry as BioEntryType } from "util/bioEntries";

const BioEntry: React.FC<{ bioEntry: BioEntryType }> = ({
  bioEntry: educationEntry,
}) => {
  return (
    <section className="bio-subentry">
      <h4>{educationEntry.time}</h4>
      <details>
        <summary>
          {educationEntry.summary}{" "}
          <span className="bio-subentry-title">
            {educationEntry.inlineSummary}
          </span>
        </summary>
        <div className="bio-subentry-description">
          <p>{educationEntry.description}</p>
          {educationEntry.lottie && (
            <img src={`https://mattewmakar.github.io/${educationEntry.lottie}`} alt="lottie" loading="lazy" />
          )}
        </div>
      </details>
    </section>
  );
};

export default BioEntry;
