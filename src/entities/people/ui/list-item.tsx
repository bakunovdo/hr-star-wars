import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@mui/material'

import MaleIcon from '@mui/icons-material/Face'
import FemaleIcon from '@mui/icons-material/Face3'

import { format } from '~shared/lib/date/format'
import { AppLink } from '~shared/routing/app-link'

import { People } from '../types'

type PeopleProps = People

export const PeopleListItem = (props: PeopleProps) => {
  const Icon = props.gender === 'male' ? MaleIcon : FemaleIcon

  return (
    <AppLink href={`/hero/${props.id}`} sx={{ textDecoration: 'none' }}>
      <Card>
        <CardActionArea>
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
