import { mockTeam  } from '../Team/mock';
import { v4 as uuid} from 'uuid';
import Image from "next/image";
import * as S from './styled';




const Rider = () => {
  const rider = mockTeam.find(item => item.id === '28981595')
  console.log("rider", rider);
  
  
  return(
    <S.Wrapper>
      <S.SideBarAthlete>
        <S.ImageAthlete image={rider?.image} />
        <S.RaceAndAthlete>
          <h2>{rider?.name}</h2>
          <S.SocialMedia>
            {rider?.socialMedia.map(item => {
              return(
                <a href={item.link} key={uuid()}>
                  <Image src={item.icon} alt={`Ícone referente ao ${item.name}`} width="100%" height="100%" layout="responsive" objectFit="contain" />
                </a>
              )
            })}
          </S.SocialMedia>
          {/* <h2>Corridas</h2>
          {rider?.races.map(item => {
            return(
              <S.RaceWrapper href={item.instagram} key={uuid()}>
                <S.ImageRaceWrapper>
                  <Image src={item.image} alt={item.name} width="100%" height="100%" layout="responsive" objectFit="contain" />
                  {item.date}
                  21  <span>MAIO</span>
                </S.ImageRaceWrapper>
                <S.ContentRace>
                  <h3>{item.name}</h3>
                  <p>{item.local}</p>
                  <p>{item.city} - {item.uf}</p>
                </S.ContentRace>
              </S.RaceWrapper>
            )
          })} */}
          </S.RaceAndAthlete>
        </S.SideBarAthlete>
      <S.ContainerAthlete>
        <ul>
          <li><h2>{rider?.name}</h2></li>
          <li>Modalidades: trail - mtb</li>
          <li>Naturalidade: Brasilia de Minas</li>
          <ul>
            <li>Results</li>
            <li>- 1st 2019 Tirreno Adriatico - Stage 1 – TTT</li>
            <li>- 1st 2019 Hammer Chase - Hammer Limburg</li>
            <li>- 2nd 2019 Cro Race - Stage 2</li>
            <li>- 3rd 2019 Cro Race - Stage 3</li>
            <li>- 5th 2019 Hammer Sprint - Hammer Limburg</li>
            <li>- 5th 2019 OVO Energy Tour of Britain - Stage 2</li>
          </ul>
          {/* <li>
          <SocialMedia>
            {rider?.socialMedia.map(item => {
              return(
                <a href={item.link} key={uuid()}>
                  <Image src={item.icon} alt={`Ícone referente ao ${item.name}`} width="100%" height="100%" layout="responsive" objectFit="contain" />
                </a>
              )
            })}
          </SocialMedia>
          </li> */}
        </ul>
        <h2>Corridas</h2>
         <S.RaceWrapper>
          {rider?.races.map(item => {
              return(
                <S.RaceContent href={item.instagram} key={uuid()}>
                  <S.ImageRaceWrapper>
                    <Image src={item.image} alt={item.name} width="100%" height="100%" layout="responsive" objectFit="contain" />
                    {/* {item.date} */}
                    21  <span>MAIO</span>
                  </S.ImageRaceWrapper>
                  <S.ContentRace>
                    <h3>{item.name}</h3>
                    <p>{item.city} - {item.uf}</p>
                  </S.ContentRace>
                </S.RaceContent>
              )
            })}
         </S.RaceWrapper>
      </S.ContainerAthlete>  
    </S.Wrapper>
  )
}

export default Rider;