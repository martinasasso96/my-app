import styled from "styled-components";
import { breakpoints } from "../components.models";

export const Wrap = styled.div`
  width: 300px;
  height: 300px;
  background: rgb(73, 9, 121);
  background: linear-gradient(
    0deg,
    rgba(73, 9, 121, 1) 0%,
    rgba(0, 164, 255, 1) 100%
  );
  border-radius: 25px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;

  @media (min-width: ${breakpoints.tablet}) {
  }

  @media (min-width: ${breakpoints.desktop}) {
  }
`;

export const Header = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${breakpoints.tablet}) {
  }

  @media (min-width: ${breakpoints.desktop}) {
  }
`;

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  
  @media (min-width: ${breakpoints.tablet}) {
  }

  @media (min-width: ${breakpoints.desktop}) {
  }
`;

export const Date = styled.span`
  margin: 0;
  font-size: 11px;
  display: flex;

  @media (min-width: ${breakpoints.tablet}) {
  }

  @media (min-width: ${breakpoints.desktop}) {
  }
`;

export const City = styled.span`
  margin: 20px 0 0;
  justify-content: center;
  display: flex;
  font-size: 25px;

  @media (min-width: ${breakpoints.tablet}) {
  }

  @media (min-width: ${breakpoints.desktop}) {
  }
`;

export const Temperature = styled.span`
  margin: 20px -20px 0 0;
  justify-content: center;
  display: flex;
  font-size: 60px;
  font-weight: 700;

  @media (min-width: ${breakpoints.tablet}) {
  }

  @media (min-width: ${breakpoints.desktop}) {
  }
`;
