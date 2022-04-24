import { useEffect, useState } from 'react';
import { CALL_REFRESH } from '../api/strava'
import { Athlete } from '../types/athlete'


export const useAthlete = () => {
  const [athlete, setAthlete] = useState<Athlete>();
  const callAthlete = `https://www.strava.com/api/v3/athletes/28981595/stats?access_token=`
  useEffect(() => {
    fetch(CALL_REFRESH, {
      method: 'POST'
    })
    .then(res => res.json())
    .then(result => getAthlete(result.access_token))
  }, [CALL_REFRESH])

  const getAthlete = (access: string) => {
    fetch(callAthlete + access)
    .then(res => res.json())
    .then(data => setAthlete(data))
  }
  return athlete;
}

