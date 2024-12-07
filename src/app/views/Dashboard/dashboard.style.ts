import { breakpoints } from "@/app/components/components.models";
import styled from "styled-components";

export const PageLoader = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 300px;
  }

  @media (min-width: ${breakpoints.tablet}) {
  }

  @media (min-width: ${breakpoints.desktop}) {
  }
`;

export const Top = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  gap: 30px;

  @media (min-width: ${breakpoints.tablet}) {
  }

  @media (min-width: ${breakpoints.desktop}) {
  }
`;
