import axios from 'axios'

import { QueryClient } from '@tanstack/react-query'

const BASE_URL = 'https://swapi.dev/api/'

export const httpClient = axios.create({ baseURL: BASE_URL })

export const queryClient = new QueryClient()
