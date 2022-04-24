import { useEffect, useState } from 'react';
import { CALL_REFRESH } from '../api/strava'

export const useSegment = () => {
  const [segment, setSegment] = useState();
  const callSegment = `https://www.strava.com/api/v3/segments/24311746?access_token=`
  useEffect(() => {
    fetch(CALL_REFRESH, {
      method: 'POST'
    })
    .then(res => res.json())
    .then(result => getSegment(result.access_token))
  }, [CALL_REFRESH])

  const getSegment = (access: string) => {
    fetch(callSegment + access)
    .then(res => res.json())
    .then(data => setSegment(data))
  }
  return segment;
}