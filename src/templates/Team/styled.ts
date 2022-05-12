import styled from "styled-components";
import * as CardStyle from '../../components/Cards/Card/styled';

export const CardWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  ${CardStyle.Wrapper} {
    padding: 0;
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.08) 0 .4rem 1.2rem;
  }
`

