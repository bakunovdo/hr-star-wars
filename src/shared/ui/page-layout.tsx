import { Box, Typography } from '@mui/material'

import { AppLink } from '~shared/routing/app-link'

import { Empty } from './empty'

interface PageLayoutProps {
  title?: string
  description?: string
  children?: React.ReactNode
}

export const PageLayout = ({ title, description, children }: PageLayoutProps) => {
  return (
    <Box p={2} display="flex" flexDirection="column" alignItems="center" maxWidth="640px" margin="0 auto" height="100vh" overflow="hidden">
      <AppLink href="/" variant="h1" title={title || 'Star Wars'} fontWeight={600} sx={{ textDecoration: 'none' }} />
      {description && <Typography>{description}</Typography>}
      <Box mt={4} width="100%" sx={{ overflowY: 'auto' }}>
        {children || <Empty />}
      </Box>
    </Box>
  )
}
