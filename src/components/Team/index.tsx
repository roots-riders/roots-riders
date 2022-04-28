


import * as S from "./styled";
import {mockTeam } from './mock'
import CardAthlete from "../Cards/CardAthlete";

const Team = () => (
  <S.CardWrapper>
    {mockTeam.map(athlete => <CardAthlete key={athlete.id} athlete={athlete} />)}
  </S.CardWrapper>
);

export default Team;