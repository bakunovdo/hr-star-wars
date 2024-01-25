4
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

import { httpClient } from '~shared/api/client'
import { People } from './types'
import { PaginatedResponse } from '~shared/api/types'
import { parsePageFromUrl, transformRawPersonToPerson } from './lib'

const PeopleKeys = {
  _root: 'people' as const,
  getPeople: () => [PeopleKeys._root + 's'] as const,
  getPerson: (id: string) => [PeopleKeys._root, id] as const,
}

// Raw Requests
const getPerson = async (id: string) => {
  const { data } = await httpClient.get<People>('people/' + id)
  return data
}

const getPeople = async (page: string) => {
  const { data } = await httpClient.get<PaginatedResponse<People>>(`people?page=${page}`)
  data.results = data.results.map(transformRawPersonToPerson)

  return data
}

export const useGetAllPeople = () => {
  const query = useInfiniteQuery({
    queryKey: PeopleKeys.getPeople(),
    queryFn: ({ pageParam }) => getPeople(pageParam),
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
