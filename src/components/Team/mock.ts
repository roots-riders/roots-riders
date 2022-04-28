import { TYPE_TEAM } from '../../utils/enums/Team';
const strava = '/img/social/strava.svg';
const facebook = '/img/social/facebook.svg';
const instagram = '/img/social/instagram.svg';
const twitter = '/img/social/twitter.svg';
const spotify = '/img/social/spotify.svg';
const twobanks = 'img/twobanks.jpeg';

type SocialMedia = {
  name: string;
  link: string;
  icon: string;
}

type Races = {
  date: string;
  name: string;
  distance: number;
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
    id: '53212152',
    name: 'twobanks',
    type: [TYPE_TEAM.MTB, TYPE_TEAM.TRAIL, TYPE_TEAM.ROOTS],
    place: 'Brasilia de Minas, MG',
    image: twobanks,
    races: [
      {
        date: '21/05/2022',
        name: 'Bocaina Trail',
        distance: 16,
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
        date: '21/05/2022',
        name: 'Bocaina Trail',
        distance: 16,
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
        date: '21/05/2022',
        name: 'Bocaina Trail',
        distance: 45,
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
        date: '21/05/2022',
        name: 'Bocaina Trail',
        distance: 45,
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