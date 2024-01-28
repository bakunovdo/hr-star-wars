export type Prettify<T> = {
  [K in keyof T]: T[K]
  // eslint-disable-next-line @typescript-eslint/ban-types
} & {}

export type WithId<T, TypeId = number> = Prettify<{ id: TypeId } & T>

export type ValuesOf<T extends object> = T[keyof T]
