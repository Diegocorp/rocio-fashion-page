import React from "react";
import { PrimaryText, SecondaryText, SectionContainer } from "./SectionElements";

function Section({id, primaryText, secondaryText, img}) { 
    return (
      <SectionContainer className="section" img={img}>
        <PrimaryText>{primaryText}</PrimaryText>
        <SecondaryText>{secondaryText}</SecondaryText>
      </SectionContainer>
  );
}

export default Section;