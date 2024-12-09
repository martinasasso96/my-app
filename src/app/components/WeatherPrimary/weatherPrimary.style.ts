import styled from "styled-components";
import { breakpoints } from "../components.models";

export const Wrap = styled.div`
  background: #6ea9d7;
  min-width: 300px;
  height: 350px;
  border-radius: 25px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;

  @media (min-width: ${breakpoints.tablet}) {
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

  
`;

export const IconButton = styled.button`
  background-color: transparent;
  border: none;

  @media (min-width: ${breakpoints.tablet}) {
  }

  
`;

export const GeoButton = styled.button`
  display: flex;
  width: 100%;
  background-color: transparent;
  border: none;
  justify-content: end;
  align-items: flex-end;
  height: 75px;

  @media (min-width: ${breakpoints.tablet}) {
  }

  
`;

export const Date = styled.span`
  margin: 0;
  font-size: 15px;
  display: flex;

  @media (min-width: ${breakpoints.tablet}) {
  }

  
`;

export const City = styled.span`
  margin: 30px 0 0;
  justify-content: center;
  display: flex;
  font-size: 30px;
  font-weight: 700;

  @media (min-width: ${breakpoints.tablet}) {
  }

  
`;

export const Temperature = styled.span`
  margin: 20px 0 0 0;
  justify-content: center;
  display: flex;
  font-size: 60px;
  font-weight: 700;

  @media (min-width: ${breakpoints.tablet}) {
  }

  
`;
