


import * as S from "./styled";
import Card from '../Card'
import { TeamProps } from "../../Team/mock";
import { useAthlete } from "../../../hooks/useAthlete";
import { useState } from "react";
import { getDistance,formatTime, monthName } from '../../../utils/functions/athletes'
const avatar = 'img/avatar.webp'

type CardAthleteProps = {
  athlete: TeamProps;
}

const FIRST = 0;
const SECOND= 1;
const THIRD = 2;

const CardAthlete = ( {athlete}: CardAthleteProps) => {
  const athletes = useAthlete();
  const [option, setOption] = useState<number>(FIRST);
  const date = new Date();
  const currentMonth = date.getMonth() + 1;
  const currentYear = date.getFullYear();

  const all = () => (
    <S.ActivitiesWrapper>
      <li><strong>all rides totals</strong></li>
      <li>treinos: {athletes?.all_ride_totals.count}</li>
      <li>distância: {getDistance(athletes?.all_ride_totals.distance)}</li>
      <li>Ganho de elev.: {athletes?.all_ride_totals.elevation_gain}m</li>
      <li>Tempo: {formatTime(athletes?.all_ride_totals.moving_time)}</li>
    </S.ActivitiesWrapper>
  )
  const recent = () => (
    <S.ActivitiesWrapper>
      <li><strong>{monthName(currentMonth)}</strong></li>
      <li>treinos: {athletes?.recent_ride_totals.count} </li>
      <li>conquistas: {athletes?.recent_ride_totals.achievement_count} </li>
      <li>distância: {getDistance(athletes?.recent_ride_totals.distance)}</li>
      <li>Ganho de elev.: {athletes?.recent_ride_totals.elevation_gain}m</li>
      <li>Tempo: {formatTime(athletes?.recent_ride_totals.moving_time)}</li>
    </S.ActivitiesWrapper>
  )
  const ytd = () => (
    <S.ActivitiesWrapper>
      <li><strong>{currentYear}</strong></li>
      <li>treinos: {athletes?.ytd_ride_totals.count}</li>
      <li>distância: {getDistance(athletes?.ytd_ride_totals.distance)}</li>
      <li>Ganho de elev.: {athletes?.ytd_ride_totals.elevation_gain}m</li>
      <li>Tempo: {formatTime(athletes?.ytd_ride_totals.moving_time)}</li>
    </S.ActivitiesWrapper>
  )
  const handleOption = (value: number) => setOption(value)
  return(
    <Card>
      <S.Content>
        <S.Header>
          <S.Avatar src={avatar}></S.Avatar>
          <S.Description>
            <h2>{athlete.name}</h2>
            {athlete.place}
            <em>{athlete.type}</em>
          </S.Description>
        </S.Header>
       {/*  <em>{athlete.type}</em>
        {athlete.socialMedia.map(media => (
          <a key={media.id} href={media.link}>{media.name}</a>
        ))} */}
        <S.ButtonOption onClick={() => handleOption(FIRST)}>Total</S.ButtonOption>
        <S.ButtonOption onClick={() => handleOption(SECOND)}>{monthName(currentMonth)}</S.ButtonOption>
        <S.ButtonOption onClick={() => handleOption(THIRD)}>{currentYear}</S.ButtonOption>
        {option === FIRST && all()}
        {option === SECOND && recent()}
        {option === THIRD && ytd()}
      </S.Content>
    </Card>
  )
}

export default CardAthlete;