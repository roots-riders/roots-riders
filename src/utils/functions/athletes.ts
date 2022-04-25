export const monthName = (month : number)  => {
  return ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'][month - 1];
}

export const  formatTime =(time?: number) => {
  const hours = Math.floor(Number(time) / 3600);
  const minutes = Math.floor((Number(time) - hours * 3600) / 60);
  return `${hours}h  ${minutes}min`;
}

export const getDistance = (distance?: number) => {
  return distance 
    ? `${Math.round(distance / 1000 * 100) / 100} km`
    : 'N/A';
}