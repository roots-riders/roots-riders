


import { useEffect, useState } from "react";
import * as S from "./styled";
import {mockTeam, TeamProps} from './mock'
import { TYPE_TEAM } from "../../utils/enums/Team";
import CardAthlete from "../Cards/CardAthlete";

const Team = () => {
  const [option, setOption] = useState<TYPE_TEAM>(TYPE_TEAM.ALL);
  const [team, setTeam] = useState<TeamProps[]>(mockTeam);
  const changeOption = (value: TYPE_TEAM) => setOption(value);
  useEffect(() => {
    const optionFiltered = mockTeam.filter(
      item => item.type === option,
      );
    setTeam(option === TYPE_TEAM.ALL ? mockTeam : optionFiltered);
  }, [option]);

  return(
    <S.Wrapper>
      <S.Options>
        <button type="button" onClick={() => changeOption(TYPE_TEAM.MTB)}>mtb</button>
        <button type="button" onClick={() => changeOption(TYPE_TEAM.TRAIL)}>trail</button>
        <button type="button" onClick={() => changeOption(TYPE_TEAM.ALL)}>all</button>
      </S.Options>
      <S.CardWrapper>
        {team.map(athlete => <CardAthlete key={athlete.id} athlete={athlete} />)}
      </S.CardWrapper>
    </S.Wrapper>
  )
};

export default Team;