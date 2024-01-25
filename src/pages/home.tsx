import { Box, IconButton, InputAdornment, TextField } from '@mui/material'
import { PageLayout } from '../shared/ui/page-layout'
import { HeroList } from '../widgets/hero-list'
import ClearIcon from '@mui/icons-material/Clear'
import { useState } from 'react'

export const HomePage = () => {
  const [search, setSearch] = useState('')

  return (
    <PageLayout>
      <Box mx={2} mt={2}>
        <TextField
          label="Search"
          sx={{ width: '100%', mb: 2 }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setSearch('')}>
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <HeroList search={search} />
      </Box>
    </PageLayout>
  )
}
