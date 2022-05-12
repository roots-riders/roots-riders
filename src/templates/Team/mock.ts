import { TYPE_TEAM } from '../../utils/enums/Team';
const strava = '/img/social/strava.svg';
const facebook = '/img/social/facebook.svg';
const instagram = '/img/social/instagram.svg';
const twitter = '/img/social/twitter.svg';
const spotify = '/img/social/spotify.svg';
const twobanks = 'img/twobanks.jpeg';
const bocaina = '/img/races/bocaina.jpg';
const btr = '/img/races/btr.jpg';

type SocialMedia = {
  name: string;
  link: string;
  icon: string;
}



type Races = {
  date: string;
  image: string;
  name: string;
  local: string;
  city: string;
  uf: string;
  instagram: string;
}

export type TeamProps = {
  id: string;
  name: string;
  type: TYPE_TEAM[];
  place: string;
  image: string;
  socialMedia: SocialMedia[];
  races: Races[];
}

export const mockTeam: TeamProps[] = [
  {
    id: '28981595',
    name: 'twobanks',
    type: [TYPE_TEAM.MTB, TYPE_TEAM.TRAIL, TYPE_TEAM.ROOTS],
    place: 'Brasilia de Minas, MG',
    image: twobanks,
    races: [
      {
        name: 'Bocaina Park Trail',
        image: bocaina,
        date: '21/05/2022',
        local: 'Bocaina Park',
        city: 'Araxá',
        uf: 'MG',
        instagram: 'bocainaparktrail',
      },
      {
        name: 'BTR - Boqueirão Trail Run',
        image: btr,
        date: '11/06/2022',
        local: 'Parque de Exposições Waltuir Gomes de Moura',
        city: 'Tapira',
        uf: 'MG',
        instagram: 'boqueiraotrailrun',
      },
      {
        name: 'Maratona Triângulo Mineiro',
        image: btr,
        date: '17/07/2022',
        local: 'Peirópolis',
        city: 'Uberaba',
        uf: 'MG',
        instagram: 'copatriangulomineiro',
      },
      {
        name: 'TRAIL RUN SPORTBRO',
        image: btr,
        date: '28/08/2022',
        local: 'Parque do Café',
        city: 'Uberaba',
        uf: 'MG',
        instagram:'sport.bro/',
      },
    ],
    socialMedia: [
      {
        name: 'Instagram',
        link: '',
        icon: instagram,
      },
      {
        name: 'Facebook',
        link: '',
        icon: facebook,
      },
      {
        name: 'Twitter',
        link: '',
        icon: twitter,
      },
      {
        name: 'Strava',
        link: 'https://www.strava.com/athletes/53212152',
        icon: strava,
      },
      {
        name: 'Spotify',
        link: '',
        icon: spotify,
      }
    ]
  },
  {
    id: '53212152',
    name: 'matheus',
    type: [TYPE_TEAM.MTB, TYPE_TEAM.TRAIL, TYPE_TEAM.ROOTS],
    place: 'Brasilia de Minas, MG',
    image: twobanks,
    races: [
      {
        name: 'Bocaina Park Trail',
        image: bocaina,
        date: '21/05/2022',
        local: 'Bocaina Park',
        city: 'Araxá',
        uf: 'MG',
        instagram: 'bocainaparktrail',
      },
      {
        name: 'BTR - Boqueirão Trail Run',
        image: btr,
        date: '11/06/2022',
        local: 'Parque de Exposições Waltuir Gomes de Moura',
        city: 'Tapira',
        uf: 'MG',
        instagram: 'boqueiraotrailrun',
      },
      {
        name: 'Maratona Triângulo Mineiro',
        image: btr,
        date: '17 /07/2022',
        local: 'Peirópolis',
        city: 'Uberaba',
        uf: 'MG',
        instagram: 'copatriangulomineiro',
      },
    ],
    socialMedia: [
      {
        name: 'Instagram',
        link: '',
        icon: instagram,
      },
      {
        name: 'Facebook',
        link: '',
        icon: facebook,
      },
      {
        name: 'Twitter',
        link: '',
        icon: twitter,
      },
      {
        name: 'Strava',
        link: 'https://www.strava.com/athletes/53212152',
        icon: strava,
      },
      {
        name: 'Spotify',
        link: '',
        icon: spotify,
      }
    ]
  },
  {
    id: '14499253',
    name: 'thiaguin',
    type: [TYPE_TEAM.MTB, TYPE_TEAM.TRAIL, TYPE_TEAM.ROOTS],
    place: 'Brasilia de Minas, MG',
    image: twobanks,
    races: [
     {
    name: 'Bocaina Park Trail',
    image: bocaina,
    date: '21/05/2022',
    local: 'Bocaina Park',
    city: 'Araxá',
    uf: 'MG',
    instagram: 'bocainaparktrail',
  },
  {
    name: 'BTR - Boqueirão Trail Run',
    image: btr,
    date: '11/06/2022',
    local: 'Parque de Exposições Waltuir Gomes de Moura',
    city: 'Tapira',
    uf: 'MG',
    instagram: 'boqueiraotrailrun',
  }
    ],
    socialMedia: [
      {
        name: 'Instagram',
        link: '',
        icon: instagram,
      },
      {
        name: 'Facebook',
        link: '',
        icon: facebook,
      },
      {
        name: 'Twitter',
        link: '',
        icon: twitter,
      },
      {
        name: 'Strava',
        link: 'https://www.strava.com/athletes/14499253',
        icon: strava,
      },
      {
        name: 'Spotify',
        link: '',
        icon: spotify,
      }
    ]
  },
  {
    id: '15171282',
    name: 'juca bala',
    type: [TYPE_TEAM.MTB, TYPE_TEAM.TRAIL, TYPE_TEAM.ROOTS],
    place: 'Brasilia de Minas, MG',
    image: twobanks,
    races: [
     {
    name: 'Bocaina Park Trail',
    image: bocaina,
    date: '21/05/2022',
    local: 'Bocaina Park',
    city: 'Araxá',
    uf: 'MG',
    instagram: 'bocainaparktrail',
  },
  {
    name: 'BTR - Boqueirão Trail Run',
    image: btr,
    date: '11/06/2022',
    local: 'Parque de Exposições Waltuir Gomes de Moura',
    city: 'Tapira',
    uf: 'MG',
    instagram: 'boqueiraotrailrun',
  }
    ],
    socialMedia: [
      {
        name: 'Instagram',
        link: '',
        icon: instagram,
      },
      {
        name: 'Facebook',
        link: '',
        icon: facebook,
      },
      {
        name: 'Twitter',
        link: '',
        icon: twitter,
      },
      {
        name: 'Strava',
        link: 'https://www.strava.com/athletes/15171282',
        icon: strava,
      },
      {
        name: 'Spotify',
        link: '',
        icon: spotify,
      }
    ]
  },
];

