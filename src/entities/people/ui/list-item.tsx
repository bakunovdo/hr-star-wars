import { RefObject } from 'react'

import MaleIcon from '@mui/icons-material/Face'
import FemaleIcon from '@mui/icons-material/Face3'
import { Avatar, Box, Card, CardActionArea, CardContent, Typography } from '@mui/material'

import { format } from '~shared/lib/date/format'
import { AppLink } from '~shared/routing/app-link'

import { People } from '../types'

type PeopleProps = {
  people: People
  measureRef?: RefObject<HTMLDivElement> | React.RefCallback<HTMLDivElement>
}

export const PeopleListItem = ({ people, measureRef }: PeopleProps) => {
  const Icon = people.gender === 'male' ? MaleIcon : FemaleIcon

  return (
    <AppLink href={`/hero/${people.id}`} sx={{ textDecoration: 'none' }}>
      <Card ref={measureRef}>
        <CardActionArea>
          <CardContent sx={{ display: 'flex' }}>
            <Avatar sx={{ mr: 2 }}>
              <Icon />
            </Avatar>
            <Box mr={1}>
              <Typography variant="body2">{people.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {format(people.created)}
              </Typography>
            </Box>
            <Box display="flex" gap={2} ml="auto">
              <StatInfo title="Height" value={people.height} />
              <StatInfo title="Mass" value={people.mass} />
              <StatInfo title="Hair color" value={people.hair_color} />
              <StatInfo title="Eye color" value={people.eye_color} />
              <StatInfo title="Skin color" value={people.skin_color} />
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </AppLink>
  )
}

type StatInfoProps = {
  title: string
  value: string | number
}

const StatInfo = (props: StatInfoProps) => {
  const isNone = ['unknown', 'none', 'n/a'].includes(String(props.value))

  return (
    <Box maxWidth={64} maxHeight={32}>
      <Typography variant="body2" color="text.primary" sx={{ whiteSpace: 'nowrap' }}>
        {props.title}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        textAlign="center"
        sx={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', maxWidth: 64, overflow: 'hidden' }}
      >
        {isNone ? '-' : props.value}
      </Typography>
    </Box>
  )
}
