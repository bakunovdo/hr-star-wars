import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { HeroPage } from '../pages/hero'
import { HomePage } from '../pages/home'

import './_side-imports'

import { Route, Switch } from 'wouter'
import { PageLayout } from '../shared/ui/page-layout'

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
