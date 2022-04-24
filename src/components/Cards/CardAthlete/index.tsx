


import * as S from "./styled";
import Card from '../Card'
import { TeamProps } from "../../Team/mock";
import { useAthlete } from "../../../hooks/useAthlete";
import { useState } from "react";

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
  
  const all = () => (
    <S.ActivitiesWrapper>
      <li><strong>all rides totals</strong></li>
      <li>count: {athletes?.all_ride_totals.count}</li>
      <li>distance: {athletes?.all_ride_totals.distance}</li>
      <li>elapsed_time: {athletes?.all_ride_totals.elapsed_time}</li>
      <li>elevation_gain: {athletes?.all_ride_totals.elevation_gain}</li>
      <li>moving_time: {athletes?.all_ride_totals.moving_time}</li>
    </S.ActivitiesWrapper>
  )
  const recent = () => (
    <S.ActivitiesWrapper>
      <li><strong>recent ride  totals</strong></li>
      <li>count: {athletes?.recent_ride_totals.count}</li>
      <li>achievement_count: {athletes?.recent_ride_totals.achievement_count}</li>
      <li>distance: {athletes?.recent_ride_totals.distance}</li>
      <li>elapsed_time: {athletes?.recent_ride_totals.elapsed_time}</li>
      <li>elevation_gain: {athletes?.recent_ride_totals.elevation_gain}</li>
      <li>moving_time: {athletes?.recent_ride_totals.moving_time}</li>
    </S.ActivitiesWrapper>
  )
  const ytd = () => (
    <S.ActivitiesWrapper>
      <li><strong>ytd ride totals</strong></li>
      <li>count: {athletes?.ytd_ride_totals.count}</li>
      <li>distance: {athletes?.ytd_ride_totals.distance}</li>
      <li>elapsed_time: {athletes?.ytd_ride_totals.elapsed_time}</li>
      <li>elevation_gain: {athletes?.ytd_ride_totals.elevation_gain}</li>
      <li>moving_time: {athletes?.ytd_ride_totals.moving_time}</li>
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
        <S.ButtonOption onClick={() => handleOption(SECOND)}>Recentes</S.ButtonOption>
        <S.ButtonOption onClick={() => handleOption(THIRD)}>ytd</S.ButtonOption>
        {option === FIRST && all()}
        {option === SECOND && recent()}
        {option === THIRD && ytd()}
      </S.Content>
    </Card>
  )
}

export default CardAthlete;