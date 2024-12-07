import styled from "styled-components";
import { breakpoints } from "./components/components.models";

export const PageWrapper = styled.div`
  background-color: #f6f6f6;
  padding: 30px;
  height: 100vh;
  background-image: url("/_next/static/media/background.c1f88d61.jpg");
  background-size: cover;

  @media (min-width: ${breakpoints.tablet}) {
  }

  @media (min-width: ${breakpoints.desktop}) {
  }
`;
