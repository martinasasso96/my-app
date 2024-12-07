import { breakpoints } from "@/app/components/components.models";
import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 60px;
  background: white;
  border-radius: 20px;
  display: flex;
  color: gray;
  justify-content: space-around;
  align-items: center;
  padding: 12px;

  @media (min-width: ${breakpoints.tablet}) {
  }

  @media (min-width: ${breakpoints.desktop}) {
  }

  hr:last-child {
    display: none;
  }
`;

export const Divider = styled.hr`
  height: 100%;
  width: 1px;
  background-color: lightgray;
  border: none;

  @media (min-width: ${breakpoints.tablet}) {
  }

  @media (min-width: ${breakpoints.desktop}) {
  }
`;

export const Param = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  @media (min-width: ${breakpoints.tablet}) {
  }

  @media (min-width: ${breakpoints.desktop}) {
  }
`;
