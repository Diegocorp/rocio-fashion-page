import React from "react";
import {
  PrimaryText,
  SecondaryText,
  TertiaryText,
  SectionContainer,
  CardInst,
} from "./SectionElements";

function Section({ id, primaryText, secondaryText, tertiaryText, img }) {
  return (
    <SectionContainer className="section" img={img}>
      <PrimaryText>{primaryText}</PrimaryText>
      <SecondaryText>{secondaryText}</SecondaryText>
      <TertiaryText>{tertiaryText}</TertiaryText>
    </SectionContainer>
  );
}

export default Section;
