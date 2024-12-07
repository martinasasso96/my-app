import { breakpoints } from "@/app/components/components.models";
import styled from "styled-components";

export const Wrap = styled.div`
  position: absolute;
  display: flex;
  justify-content: right;
  margin-right: 45px;
  width: -webkit-fill-available;

  @media (min-width: ${breakpoints.tablet}) {
  }

  @media (min-width: ${breakpoints.desktop}) {
  }
`;

export const Modal = styled.div`
  background: #6ea9d7;
  color: #6ea9d7;
  width: 100px;
  height: 150px;
  border-radius: 25px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${breakpoints.tablet}) {
  }

  @media (min-width: ${breakpoints.desktop}) {
  }
`;

export const Option = styled.div<{ selected: boolean }>`
  ${({ selected }) =>
    selected
      ? `background: #83d8dd;
    color: white;
`
      : `background: white;`}

  width: 100%;
  height: 43px;
  border-radius: 25px;
  font-weight: 700;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${breakpoints.tablet}) {
  }

  @media (min-width: ${breakpoints.desktop}) {
  }
`;
