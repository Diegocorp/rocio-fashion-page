import styled from 'styled-components'

export const SectionContainer = styled.div`
  text-align: center;
  font-family: "Montserrat";
  background: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
`

export const PrimaryText = styled.h1`
  font-size: 7em;
  color: #fff;
  font-weight: 700;
`

export const SecondaryText = styled.h2`
  font-size: 1em;
  color: #fff;
  font-weight: 700;
`