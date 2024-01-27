import { QueryClient } from '@tanstack/react-query'

import axios from 'axios'

const BASE_URL = 'https://swapi.dev/api/'

export const httpClient = axios.create({ baseURL: BASE_URL })

export const queryClient = new QueryClient()
