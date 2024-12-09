import styled from "styled-components";
import { breakpoints } from "../components.models";

export const Wrap = styled.div`
  padding: 15px;
  margin: -30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100vh;
  width: 100vw;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 150px;
    margin: -45px;
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
`;

export const CloseWrap = styled.div`
  position: absolute;
  width: calc(100vw - 325px);
  padding-right: 25px;

  @media (min-width: ${breakpoints.tablet}) {
    width: calc(100vw - 325px);
  }
`;

export const Close = styled.div`
  background: #4881ae;
  width: 50px;
  height: 50px;
  border-radius: 100px;
  padding: 10px;
  color: black;
  margin-left: calc(100vw - 125px);

  @media (min-width: ${breakpoints.tablet}) {
    margin-left: calc(100% - 50px);
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
`;
