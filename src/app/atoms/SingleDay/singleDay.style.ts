import { breakpoints } from "@/app/components/components.models";
import styled from "styled-components";

export const Wrap = styled.div`
  background: #daedfe;
  width: 100%;
  height: 285px;
  border-radius: 25px;
  color: #4881ae;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;

  @media (min-width: ${breakpoints.tablet}) {
  }

  @media (min-width: ${breakpoints.desktop}) {
  }
`;

export const WeekDay = styled.span`
  font-size: 25px;
  margin: 0;
  font-weight: 700;

  @media (min-width: ${breakpoints.tablet}) {
  }

  @media (min-width: ${breakpoints.desktop}) {
  }
`;

export const Day = styled.span`
  font-size: 15px;
  margin: 0;

  @media (min-width: ${breakpoints.tablet}) {
  }

  @media (min-width: ${breakpoints.desktop}) {
  }
`;

export const IconWrap = styled.div`
  height: 100%;
  width: 100px;
  display: flex;

  @media (min-width: ${breakpoints.tablet}) {
  }

  @media (min-width: ${breakpoints.desktop}) {
  }
`;

export const TempWrap = styled.div<{ $iscolumn: boolean }>`
  width: 120px;
  display: flex;
  flex-direction: ${({ $iscolumn }) => ($iscolumn ? "column" : "row")};
  justify-content: space-evenly;

  @media (min-width: ${breakpoints.tablet}) {
  }

  @media (min-width: ${breakpoints.desktop}) {
  }
`;

export const TempSpace = styled.div<{ $iscolumn: boolean }>`
  width: 100%;
  display: ${({ $iscolumn }) => ($iscolumn ? "none" : "flex")};
  justify-content: space-evenly;
  font-size: 25px;
  font-weight: 700;
`;

export const Temp = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  font-size: 25px;
  font-weight: 700;

  @media (min-width: ${breakpoints.tablet}) {
  }

  @media (min-width: ${breakpoints.desktop}) {
  }
`;
