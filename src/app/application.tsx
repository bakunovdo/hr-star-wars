import './_side-imports'

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { Route, Switch } from 'wouter'

import { HeroPage } from '~pages/hero'
import { HomePage } from '~pages/home'

import { PageLayout } from '~shared/ui/page-layout'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

export function Application() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/hero/:id">{({ id }) => <HeroPage id={id} />}</Route>
        <Route>
          <PageLayout>Page not found</PageLayout>
        </Route>
      </Switch>
    </ThemeProvider>
  )
}
