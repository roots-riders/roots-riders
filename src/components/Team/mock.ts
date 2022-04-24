import { v4 as uuid } from 'uuid';
import { TYPE_TEAM } from '../../utils/enums/Team';

type SocialMedia = {
  id: string;
  name: string;
  link: string;
}

export type TeamProps = {
  id: string;
  name: string;
  type: TYPE_TEAM;
  place: string;
  image: string;
  socialMedia: SocialMedia[];
}

export const mockTeam: TeamProps[] = [{
  id: uuid(),
  name: 'Thiago',
  type: TYPE_TEAM.MTB,
  place: 'Brasilia de Minas, MG',
  image: '',
  socialMedia: [{
    id: uuid(),
    name: 'Instagram',
    link: ''
  }]
},
{
  id: uuid(),
  name: 'Teste 2',
  type: TYPE_TEAM.MTB,
  place: 'Uberaba, MG',
  image: '',
  socialMedia: [{
    id: uuid(),
    name: 'Instagram',
    link: ''
  }]
},
{
  id: uuid(),
  name: 'Teste 3',
  type: TYPE_TEAM.TRAIL,
  place: 'Uberaba, MG',
  image: '',
  socialMedia: [{
    id: uuid(),
    name: 'Instagram',
    link: ''
  }]
}];