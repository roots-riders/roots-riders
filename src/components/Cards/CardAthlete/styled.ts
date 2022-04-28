import styled, { css } from "styled-components";
import Image from "next/image";

type CardAthleteStyle = {
  image?: string;
}


export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1;
  width: 30rem;
  height: auto;
  padding-bottom: 2rem;
  cursor: pointer;
`;


export const Athlete = styled.section<CardAthleteStyle>`
  ${({ image }) => css`
    display: flex;
    height: 35rem;
    width: 100%;
    background-image: url(${image});
    background-size: cover;
    background-position: center;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.08) 0 .4rem 1.2rem;
  `}
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h2 {
    font-size: 3rem;
    font-weight: 600;
    width: 100%;
    text-align: center;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  a {
    width: 2rem;
    height: 2rem;
  }
`;