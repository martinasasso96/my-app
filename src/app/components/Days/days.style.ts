import styled from "styled-components";
import { breakpoints } from "../components.models";

export const Container = styled.div`
  background: #ffffff;
  width: 100%;
  height: 350px;
  border-radius: 25px;
  color: white;
  padding: 15px;
  overflow: hidden;

  @media (min-width: ${breakpoints.tablet}) {
  }

  @media (min-width: ${breakpoints.desktop}) {
  }
`;

export const Wrap = styled.div`
  display: flex;
  gap: 15px;
  justify-content: space-evenly;
  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-width: none;

  @media (min-width: ${breakpoints.tablet}) {
  }

  @media (min-width: ${breakpoints.desktop}) {
  }
`;

export const Settings = styled.div`
  width: 100%;
  height: 20px;
  color: #4881ae;
  margin-bottom: 15px;
  padding-right: 10px;
  display: flex;
  justify-content: space-between;

  @media (min-width: ${breakpoints.tablet}) {
  }

  @media (min-width: ${breakpoints.desktop}) {
  }
`;
