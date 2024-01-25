import { Box, Button, CircularProgress, Divider, Typography } from '@mui/material'

import { PeopleListItem, useGetAllPeople } from '~entities/people'

export const HeroList = () => {
  const query = useGetAllPeople()

  if (query.isLoading) {
    return (
      <Box mx="auto" width="fit-content" height={50}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Box display="flex" flexDirection="column" mx="1rem" gap={2}>
      {query.data?.pages.map((pagedData, idx) => {
        return (
          <>
            {idx !== 0 && (
              <Divider>
                <Typography variant="body2" color="text.secondary">
                  {idx + 1}
                </Typography>
              </Divider>
            )}
            {pagedData.results.map((data) => (
              <PeopleListItem key={data.id} {...data} />
            ))}
          </>
        )
      })}

      <Button onClick={() => query.fetchNextPage()} disabled={!query.hasNextPage || query.isFetchingNextPage}>
        {query.isFetchingNextPage ? 'Loading more...' : query.hasNextPage ? 'Load More' : 'Nothing more to load'}
      </Button>
    </Box>
  )
}
