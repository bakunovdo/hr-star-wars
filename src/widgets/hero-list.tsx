import { Box } from '@mui/material'

import { PeopleMock, PeopleListItem } from '~entities/people'

export const HeroList = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      maxWidth="480px"
      mx="auto"
      gap={2}
    >
      <PeopleListItem id="1" {...PeopleMock} />
      <PeopleListItem id="2" {...PeopleMock} />
      <PeopleListItem id="3" {...PeopleMock} />
      <PeopleListItem id="4" {...PeopleMock} />
      <PeopleListItem id="5" {...PeopleMock} />
    </Box>
  )
}
