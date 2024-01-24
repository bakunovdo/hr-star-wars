import { Box, Card, CardContent, IconButton, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import EditIcon from '@mui/icons-material/Edit'
import Divider from '@mui/material/Divider'

import { People } from '../types'

type PeopleEditableCardProps = People

export const PeopleEditableCard = (props: PeopleEditableCardProps) => {
  const handleEdit = () => {
    console.log('Edit')
  }

  return (
    <Card
      variant="outlined"
      sx={{ width: 'fit-content', mx: 'auto', position: 'relative' }}
    >
      <IconButton
        className="people-edit-icon"
        size="small"
        aria-label="edit"
        sx={{ position: 'absolute', right: 8, top: 8 }}
        onClick={handleEdit}
      >
        <EditIcon />
      </IconButton>
      <CardContent sx={{ p: 0, ':last-child': { p: 0 } }}>
        <Box p={2} width="fit-content" textAlign="center">
          <AccountCircleIcon sx={{ fontSize: 120 }} />
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
        </Box>
        <Divider />
        <Box display="flex" flexDirection="column" gap={2} mt={2} p={2}>
          <StatInfo title="Height" value={props.height} />
          <StatInfo title="Mass" value={props.mass} />
          <StatInfo title="Hair color" value={props.hair_color} />
          <StatInfo title="Eye color" value={props.eye_color} />
          <StatInfo title="Skin color" value={props.skin_color} />
        </Box>
      </CardContent>
    </Card>
  )
}

type StatInfoProps = {
  title: string
  value: string | number
}

const StatInfo = (props: StatInfoProps) => {
  return (
    <Box display="flex">
      <Typography sx={{ mr: 1 }} variant="body2" color="text.primamry">
        {props.title}
      </Typography>
      <Typography
        sx={{ ml: 'auto' }}
        variant="body2"
        color="text.secondary"
        textAlign="center"
      >
        {props.value}
      </Typography>
    </Box>
  )
}
