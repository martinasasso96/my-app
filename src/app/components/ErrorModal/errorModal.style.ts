import styled from "styled-components";
import { breakpoints } from "../components.models";

export const Wrap = styled.div`
  padding: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin: -45px;
  height: 100vh;
  width: 100vw;

  @media (min-width: ${breakpoints.tablet}) {
  }

  @media (min-width: ${breakpoints.desktop}) {
  }
`;

export const Modal = styled.div`
  background: white;
  width: 100%;
  height: fit-content;
  border-radius: 25px;
  padding: 25px;
  box-shadow: 0px 0px 30px #4881ae;

  @media (min-width: ${breakpoints.tablet}) {
  }

  @media (min-width: ${breakpoints.desktop}) {
  }
`;

export const CloseWrap = styled.div`
  position: absolute;
  width: calc(100% - 325px);
  padding-right: 25px;

  @media (min-width: ${breakpoints.tablet}) {
  }

  @media (min-width: ${breakpoints.desktop}) {
  }
`;

export const Close = styled.div`
  background: #4881ae;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  padding: 10px;
  color: black;
  margin-left: calc(100% - 50px);

  @media (min-width: ${breakpoints.tablet}) {
  }

  @media (min-width: ${breakpoints.desktop}) {
  }
`;

export const IconError = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 500px);
  align-items: center;
  font-size: 25px;
  line-height: 40px;
  font-weight: 700;
  color: #db0909;

  svg {
    margin-bottom: 30px;
  }

  @media (min-width: ${breakpoints.tablet}) {
  }

  @media (min-width: ${breakpoints.desktop}) {
  }
`;
