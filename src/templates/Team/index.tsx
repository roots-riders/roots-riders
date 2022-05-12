import * as S from './styled';
import { mockTeam } from './mock'
import CardAthlete from '../../components/Cards/CardAthlete';
import { useState } from 'react';

const Team = () => {
  
  return (
    <S.CardWrapper>
      {mockTeam.map(athlete => <CardAthlete key={athlete.id} athlete={athlete} />)}
    </S.CardWrapper>
  )
};

export default Team;