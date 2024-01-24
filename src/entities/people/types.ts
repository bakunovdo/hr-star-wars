import { WithId } from '~shared/types'

export type RawPeople = {
  name: string
  height: string
  mass: string
  gender: string
  hair_color: string
  skin_color: string
  eye_color: string
  created: string
  url: string
}

export type People = WithId<RawPeople, string>
