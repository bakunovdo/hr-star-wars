import './_side-imports'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Route, Switch } from 'wouter'

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

import { HeroPage } from '~pages/hero'
import { HomePage } from '~pages/home'
import { queryClient } from '~shared/api/client'
import { PageLayout } from '~shared/ui/page-layout'

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
