
import { useEffect, useState } from 'react';
import { CALL_REFRESH } from '../api/strava'

export const useClub = () => {
  const [club, setClub] = useState();
  const callClub = `https://www.strava.com/api/v3/clubs/537532?access_token=`
  useEffect(() => {
    fetch(CALL_REFRESH, {
      method: 'POST'
    })
    .then(res => res.json())
    .then(result => getClub(result.access_token))
  }, [CALL_REFRESH])

  const getClub = (access: string) => {
    fetch(callClub + access)
    .then(res => res.json())
    .then(data => setClub(data))
  }
  return club;
}