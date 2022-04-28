type Values = {
  count: number;
  distance: number;
  moving_time: number;
  elapsed_time: number;
  elevation_gain: number;
}

export type Athlete = {
  all_ride_totals: Values;
  all_run_totals: Values;
  biggest_climb_elevation_gain: number;
  biggest_ride_distance: number;
  recent_ride_totals:  { achievement_count: number; } & Values;
  recent_run_totals: { achievement_count: number; } & Values;
  ytd_ride_totals: Values;
  ytd_run_totals: Values;
}