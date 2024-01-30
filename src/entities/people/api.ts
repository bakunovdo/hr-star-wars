import { httpClient } from '~shared/api/client'
import { PaginatedResponse } from '~shared/api/types'

import { transformRawPersonToPerson } from './lib'
import { People, RawPeople } from './types'

export const PeopleKeys = {
  _root: 'people' as const,
  getPeople: (search: string = '') => [PeopleKeys._root + 's', search] as const,
  getPerson: (id: string) => [PeopleKeys._root, id] as const,
}

export const getPerson = async (id: string) => {
  const { data } = await httpClient.get<RawPeople>('people/' + id)
  return transformRawPersonToPerson(data)
}

export const getPeople = async (page: string, search: string) => {
  const { data } = await httpClient.get<PaginatedResponse<People>>(`people`, { params: { page, search } })
  data.results = data.results.map(transformRawPersonToPerson)

  return data
}
