export const format = (input: Date | string) => {
  const date = typeof input === 'string' ? new Date(input) : input

  return date.toLocaleString('ru-RU', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  })
}
