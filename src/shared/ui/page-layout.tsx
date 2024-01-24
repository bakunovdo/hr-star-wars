import { Box, Typography } from '@mui/material'

import { AppLink } from '~shared/routing/app-link'

import { Empty } from './empty'

interface PageLayoutProps {
  title?: string
  description?: string
  children?: React.ReactNode
}

export const PageLayout = (props: PageLayoutProps) => {
  return (
    <Box
      p={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
      maxWidth="768px"
      margin="0 auto"
      minHeight="100vh"
    >
      <AppLink
        href="/"
        variant="h1"
        title={props.title || 'Star Wars'}
        fontWeight={600}
        sx={{ textDecoration: 'none' }}
      />
      {props.description && <Typography>{props.description}</Typography>}
      <Box mt={4} width="100%">
        {props.children || <Empty />}
      </Box>
    </Box>
  )
}
