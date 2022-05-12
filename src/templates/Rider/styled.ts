import styled, { css } from "styled-components";

type AthleteStyle = {
  image?: string;
}

export const Wrapper = styled.section`
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 108rem;
`;

export const SideBarAthlete = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 40rem;
    padding: 1rem;
    border-radius: 1rem;
    background-color: ${theme.colors.primary};
    box-shadow: rgba(0, 0, 0, 0.08) 0 .4rem 1.2rem;
    h2 {
      font-size: ${theme.font.sizes.s24};
      font-family: ${theme.font.family.roboto};
      font-weight: ${theme.font.bold};
    }
  `}
`;

export const ImageAthlete = styled.div<AthleteStyle>`
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

export const RaceAndAthlete = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 .5rem;
`

export const RaceContent = styled.a`
  ${({theme}) => css`
    display: flex;
    gap: 2rem;
    text-decoration: none;
    box-shadow: rgba(0, 0, 0, 0.08) 0 .4rem 1.2rem;
    padding: 1rem;
    border-radius: 1rem;
  `}
`;

export const RaceWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
`;

export const ImageRaceWrapper = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 6rem;
    justify-content: center;
    padding: 0.5rem 1.5rem;
    border-radius: 1rem;
    background-color: ${theme.colors.primary};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.s18};
    color: ${theme.colors.white};
    span {
      font-size: ${theme.font.sizes.s12};
    }
    box-shadow: rgba(0, 0, 0, 0.08) 0 .4rem 1.2rem;
  `}

`

export const ContentRace = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    h3 {
      font-size: ${theme.font.sizes.s16};
    }
    p {
      font-size: ${theme.font.sizes.s12};
    }
  `}
`

export const Distance = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.text_primary};
    color: ${theme.colors.white};
    height: fit-content;
    font-size: ${theme.font.sizes.s12};
  `}
`

export const ContainerAthlete = styled.div`
${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex: 1;
    background: ${theme.colors.primary};
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.08) 0 .4rem 1.2rem;
    padding: 2rem;
    ul {
      display: flex;
      flex-direction: column;
      li {
        list-style: none;
        h2 {
          font-size: ${theme.font.sizes.s48};
          font-family: ${theme.font.family.roboto};
          font-weight: ${theme.font.bold};
        }
      }
    }
  `}
`;

export const HeaderAthlete = styled.header``;

export const ContentAthlete = styled.div``;

export const SocialMedia = styled.div`
display: flex;
  a {
    width: 2rem;
    height: 2rem;
  }
`;