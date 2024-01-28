import { useEffect } from 'react'

import { useIntersectionObserver } from '@uidotdev/usehooks'

import { Box, BoxProps, CircularProgress, Divider, Typography } from '@mui/material'

import { PeopleListItem, useGetAllPeople } from '~entities/people'

type HeroListProps = BoxProps & {
  search?: string
}

export const HeroList = ({ search, ...boxProps }: HeroListProps) => {
  const query = useGetAllPeople(search)

  const [ref, entry] = useIntersectionObserver<HTMLDivElement>({
    root: null,
    threshold: 0,
    rootMargin: '0px',
  })

  useEffect(() => {
    if (!query.hasNextPage || query.isFetchingNextPage) return
    if (entry?.isIntersecting) query.fetchNextPage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entry])

  if (query.isLoading) {
    return (
      <Box mx="auto" width="fit-content" height={50}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Box display="flex" flexDirection="column" gap={2} {...boxProps}>
      {query.data?.pages.map((pagedData, idxPage) => {
        const isLastPage = query.data.pages.length === idxPage + 1

        return (
          <>
            {idxPage !== 0 && (
              <Divider>
                <Typography variant="body2" color="text.secondary">
                  {idxPage + 1}
                </Typography>
              </Divider>
            )}
            {pagedData.results.map((data, idxItem) => {
              const isLastItem = pagedData.results.length === idxItem + 1
              const isLastItemOnScreen = isLastItem && isLastPage

              if (isLastItemOnScreen) {
                return <PeopleListItem key={data.id} people={data} measureRef={ref} />
              }

              return <PeopleListItem key={data.id} people={data} />
            })}
          </>
        )
      })}

      {query.isFetchingNextPage && <Typography>Loading more...</Typography>}
      {!query.hasNextPage && !query.isFetchingNextPage && <Typography>Nothing more to load</Typography>}
    </Box>
  )
}
