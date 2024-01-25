import { Box, BoxProps, Button, CircularProgress, Divider, Typography } from '@mui/material'

import { PeopleListItem, useGetAllPeople } from '~entities/people'

type HeroListProps = BoxProps & {
  search?: string
}

export const HeroList = ({ search, ...boxProps }: HeroListProps) => {
  const query = useGetAllPeople(search)

  if (query.isLoading) {
    return (
      <Box mx="auto" width="fit-content" height={50}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Box display="flex" flexDirection="column" gap={2} {...boxProps}>
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
