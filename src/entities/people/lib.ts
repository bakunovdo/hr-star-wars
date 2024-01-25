import { People, RawPeople } from './types'

export const parsePageFromUrl = (url: string): string => {
  const matched = url.match(/page=(\d+)/)
  return matched?.at(1) || '1'
}

export const getPersonId = (person: RawPeople): string => {
  return person.url.split('/').at(-2)!
}

export const transformRawPersonToPerson = (person: RawPeople): People => {
  return {
    ...person,
    id: getPersonId(person),
  }
}
