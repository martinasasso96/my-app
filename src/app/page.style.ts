import styled from "styled-components";
import { breakpoints } from "./components/components.models";

export const PageWrapper = styled.div<{ src: string }>`
  background-color: #f6f6f6;
  padding: 30px;
  height: fit-content;
  background-image: url(${({ src }) => src});
  background-size: cover;

  @media (min-width: ${breakpoints.tablet}) {
  }
`;
