import './_side-imports'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { Route, Switch } from 'wouter'

import { HeroPage } from '~pages/hero'
import { HomePage } from '~pages/home'

import { PageLayout } from '~shared/ui/page-layout'
import { queryClient } from '~shared/api/client'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

export function Application() {
  return (
    <ThemeProvider theme={darkTheme}>
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/hero/:id">{({ id }) => <HeroPage id={id} />}</Route>
          <Route>
            <PageLayout>Page not found</PageLayout>
          </Route>
        </Switch>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ThemeProvider>
  )
}
