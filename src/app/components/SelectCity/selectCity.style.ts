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

export const Label = styled.label`
  color: #4881ae;
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 25px;
  display: block;

  @media (min-width: ${breakpoints.tablet}) {
  }
`;

export const Box = styled.div`
  width: calc(100% - 80px);

  input {
    width: 100%;
    height: 50px;
    border: solid;
    border-radius: 15px;
    padding-right: 10px;
    font-size: 25px;
    padding-left: 15px;
    border-color: #4881ae;
    color: #4881ae;
    text-overflow: ellipsis;
  }

  input:focus {
    outline-color: transparent;
  }

  ul {
    list-style-type: none;
    border: 1px solid #4881ae;
    border-radius: 15px;
  }

  li {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #4881ae;
    font-size: 20px;
    padding: 14px;
    border-color: #4881ae;
    color: #4881ae;
    text-overflow: ellipsis;
  }

  li:last-child {
    border-bottom: none;
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
  width: calc(100% - 325px);
  padding-right: 25px;

  @media (min-width: ${breakpoints.tablet}) {
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

export const Button = styled.button`
  background: #6ea9d7;
  width: fit-content;
  height: fit-content;
  border: none;
  color: white;
  border-radius: 40px;
  padding: 10px 18px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin-top: 15px;

  @media (min-width: ${breakpoints.tablet}) {
  }
`;
