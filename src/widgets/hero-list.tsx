import { Box } from '@mui/material'
import { PeopleListItem } from '../entities/people'

export const HeroList = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      maxWidth="480px"
      mx="auto"
      gap={2}
    >
      <PeopleListItem />
      <PeopleListItem />
      <PeopleListItem />
      <PeopleListItem />
      <PeopleListItem />
    </Box>
  )
}
