4
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

import { httpClient, queryClient } from '~shared/api/client'
import { People } from './types'
import { PaginatedResponse } from '~shared/api/types'
import { parsePageFromUrl, transformRawPersonToPerson } from './lib'

const PeopleKeys = {
  _root: 'people' as const,
  getPeople: (search: string = '') => [PeopleKeys._root + 's', search] as const,
  getPerson: (id: string) => [PeopleKeys._root, id] as const,
}

// Raw Requests
const getPerson = async (id: string) => {
  const { data } = await httpClient.get<People>('people/' + id)
  return data
}

const getPeople = async (page: string, search: string) => {
  const { data } = await httpClient.get<PaginatedResponse<People>>(`people`, { params: { page, search } })
  data.results = data.results.map(transformRawPersonToPerson)

  // Manually setQuery peoples by id, avoid duplicated requests.
  data.results.forEach((people) => {
    queryClient.setQueryData(PeopleKeys.getPerson(people.id), people)
  })

  return data
}

export const useGetAllPeople = (search: string = '') => {
  const query = useInfiniteQuery({
    queryKey: PeopleKeys.getPeople(search),
    queryFn: ({ pageParam }) => getPeople(pageParam, search),
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
