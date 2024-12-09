import styled from "styled-components";
import { breakpoints } from "../components.models";

export const Wrap = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 400px;
  width: 100%;
  background: white;
  border-radius: 25px;

  @media (min-width: ${breakpoints.tablet}) {
    width: 40%;
  }
`;

export const TitleBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (min-width: ${breakpoints.tablet}) {
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-weight: 700;
  font-size: 25px;
  text-align: left;
  width: 100%;
  color: #4881ae;

  @media (min-width: ${breakpoints.tablet}) {
  }
`;

export const BoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  margin-top: 15px;
  width: 100%;
  overflow: scroll;
  overflow-x: hidden;
  scrollbar-width: none;

  @media (min-width: ${breakpoints.tablet}) {
  }
`;

export const Box = styled.div`
  padding: 15px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 110px;
  border-radius: 25px;
  display: flex;
  gap: 30px;
  font-size: 25px;
  font-weight: 700;
  color: white;

  @media (min-width: ${breakpoints.tablet}) {
  }
`;

export const Stats = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;

  svg {
    height: 40px;
  }

  @media (min-width: ${breakpoints.tablet}) {
  }
`;

export const AddBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  display: flex;
  color: black;

  @media (min-width: ${breakpoints.tablet}) {
  }
`;
