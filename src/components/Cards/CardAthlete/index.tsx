import * as S from "./styled";
import { v4 as uuid} from 'uuid';
import Card from '../Card'
import { TeamProps } from "../../../templates/Team/mock";
import Image from "next/image";
import { useRouter } from 'next/router';

type CardAthleteProps = {
  athlete: TeamProps;
}

const CardAthlete = ({ athlete }: CardAthleteProps) => {
  const router = useRouter();
  const goProgram = () => router.push('/rider');
  return (
    <Card>
      <S.Content onClick={goProgram}>
        <S.Athlete image={athlete.image} />
        <S.Description>
          <h2>{athlete.name}</h2>
          <S.SocialMedia>
            {athlete.socialMedia.map(item => {
              return(
                <a href={item.link} key={uuid()}>
                  <Image src={item.icon} alt={`Ícone referente ao ${item.name}`} width="100%" height="100%" layout="responsive" objectFit="contain" />
                </a>
              )
            })}
          </S.SocialMedia>
        </S.Description>
      </S.Content>
    </Card>
  )
}

export default CardAthlete;