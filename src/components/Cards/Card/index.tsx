


import * as S from "./styled";

type CardProps = {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps ) => (
  <S.Wrapper>
    {children}
  </S.Wrapper>
)

export default Card;