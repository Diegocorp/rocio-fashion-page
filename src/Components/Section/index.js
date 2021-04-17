import React from "react";
import { PrimaryText, SecondaryText, SectionContainer } from "./SectionElements";

function Section({id, primaryText, secondaryText, img}) { 
    return (
      <SectionContainer className="section">
        <PrimaryText>{primaryText}</PrimaryText>
        <SecondaryText>{secondaryText}</SecondaryText>
      </SectionContainer>
  );
}

export default Section;