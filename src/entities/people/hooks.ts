import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

import { queryClient } from '~shared/api/client'

import { getPeople, getPerson, PeopleKeys } from './api'
import { parsePageFromUrl } from './lib'

export const useGetAllPeople = (search: string = '') => {
  const query = useInfiniteQuery({
    queryKey: PeopleKeys.getPeople(search),
    queryFn: async ({ pageParam }) => {
      const paged = await getPeople(pageParam, search)

      // Manually setQuery peoples by id, avoid duplicated requests.
      paged.results.forEach((people) => {
        queryClient.setQueryData(PeopleKeys.getPerson(people.id), people)
      })

      return paged
    },
    initialPageParam: '1',
    getNextPageParam: (data) => (data.next ? parsePageFromUrl(data.next) : undefined),
    getPreviousPageParam: (data) => (data.previous ? parsePageFromUrl(data.previous) : undefined),
  })

  return query
}

export const useGetPerson = (id: string) => {
  const query = useQuery({
    queryKey: PeopleKeys.getPerson(id),
    queryFn: () => getPerson(id),
  })

  return query
}
