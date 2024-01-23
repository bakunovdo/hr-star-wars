import { Box, Link, Paper, Typography } from '@mui/material'
import { Link as RouteLink } from 'wouter'
import { Empty } from './empty'

interface PageLayoutProps {
  title?: string
  description?: string
  children?: React.ReactNode
}

export const PageLayout = (props: PageLayoutProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      maxWidth="768px"
      margin="0 auto"
    >
      <RouteLink href="/">
        <Link variant="h1">{props.title || 'Star Wars'}</Link>
      </RouteLink>
      {props.description && (
        <Typography fontWeight={600}>{props.description}</Typography>
      )}
      <Paper sx={{ mt: 2, p: 4 }}>{props.children || <Empty />}</Paper>
    </Box>
  )
}
