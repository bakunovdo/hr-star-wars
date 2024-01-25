import { Box, CircularProgress } from '@mui/material'
import { PageLayout } from './page-layout'

export const PageLoader = () => {
  return (
    <PageLayout>
      <Box mx="auto" width="fit-content" height={50}>
        <CircularProgress />
      </Box>
    </PageLayout>
  )
}
