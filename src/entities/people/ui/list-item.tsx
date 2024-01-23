import { Avatar, Box, Card, CardContent, Typography } from '@mui/material'

import MaleIcon from '@mui/icons-material/Face'
import FemaleIcon from '@mui/icons-material/Face3'
import { format } from '../../../shared/lib/date/format'
import { AppLink } from '../../../shared/routing/app-link'

const props = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  homeworld: 'https://swapi.dev/api/planets/1/',
  films: [
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/2/',
    'https://swapi.dev/api/films/3/',
    'https://swapi.dev/api/films/6/',
  ],
  species: [],
  vehicles: [
    'https://swapi.dev/api/vehicles/14/',
    'https://swapi.dev/api/vehicles/30/',
  ],
  starships: [
    'https://swapi.dev/api/starships/12/',
    'https://swapi.dev/api/starships/22/',
  ],
  created: '2014-12-09T13:50:51.644000Z',
  edited: '2014-12-20T21:17:56.891000Z',
  url: 'https://swapi.dev/api/people/1/',
}

export const PeopleListItem = () => {
  const Icon = props.gender === 'male' ? MaleIcon : FemaleIcon

  return (
    <AppLink
      href="/hero/1"
      sx={{
        position: 'relative',
        textDecoration: 'none',
        transition: 'all .05s ease-in',
        top: 0,
        ':hover': { opacity: '0.9', top: -2 },
      }}
    >
      <Card>
        <CardContent sx={{ display: 'flex' }}>
          <Avatar sx={{ mr: 2 }}>
            <Icon />
          </Avatar>
          <Box mr={1}>
            <Typography variant="body2">{props.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {format(props.created)}
            </Typography>
          </Box>
          <Box display="flex" gap={2} ml="auto">
            <StatInfo title="Height" value={props.height} />
            <StatInfo title="Mass" value={props.mass} />
          </Box>
        </CardContent>
      </Card>
    </AppLink>
  )
}

type StatInfoProps = {
  title: string
  value: string | number
}

const StatInfo = (props: StatInfoProps) => {
  return (
    <Box>
      <Typography variant="body2" color="text.primamry">
        {props.title}
      </Typography>
      <Typography variant="body2" color="text.secondary" textAlign="center">
        {props.value}
      </Typography>
    </Box>
  )
}
