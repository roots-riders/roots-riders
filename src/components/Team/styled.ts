import styled, { css } from "styled-components";
import media from "styled-media-query";
const dita = "/dita.jpg";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  max-width: 120rem;
  padding: 3rem;
  margin: 0 auto;
  position: relative;
  ${media.lessThan("medium")`
    justify-content: center;
    padding: 2rem;
  `}
`;

