


import { useEffect, useState } from "react";
import * as S from "./styled";
import {mockTeam, TeamProps} from './mock'
import { TYPE_TEAM } from "../../utils/enums/Team";

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
      <button type="button" onClick={() => changeOption(TYPE_TEAM.MTB)}>mtb</button>
      <button type="button" onClick={() => changeOption(TYPE_TEAM.TRAIL)}>trail</button>
      <button type="button" onClick={() => changeOption(TYPE_TEAM.ALL)}>all</button>
      <ul>
        {team.map(item => {
          const {id, name, type, place, age, image, socialMedia} = item;
           return(
            <li key={id}>
              {name}
              {type}
              {place}
              {age}
              {image}
              {socialMedia.map(media => (
                <a key={media.id} href={media.link}>{media.name}</a>
              ))}
            </li>
          )
        })}
      </ul>
    </S.Wrapper>
  )
};

export default Team;