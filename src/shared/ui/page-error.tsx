import { Paper, Typography } from '@mui/material'

type ErrorStatusProps = {
  message: string
  description?: string
}

export const ErrorStatus = (props: ErrorStatusProps) => {
  return (
    <Paper sx={{ p: 4, textAlign: 'center', maxWidth: 320, mx: 'auto' }}>
      <Typography variant="h5">{props.message}</Typography>
      <Typography variant="body2">{props.description}</Typography>
    </Paper>
  )
}
