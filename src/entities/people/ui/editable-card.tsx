import { useState } from 'react'

import { useQueryClient } from '@tanstack/react-query'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import EditIcon from '@mui/icons-material/Edit'
import { Box, Card, CardContent, Grow, IconButton, TextField, Typography } from '@mui/material'
import Divider from '@mui/material/Divider'

import { ValuesOf } from '~shared/types'
import { Control, Controller, useForm } from 'react-hook-form'

import { PeopleKeys } from '../api'
import { People } from '../types'

type PeopleEditableCardProps = People

const Mode = {
  Read: 0,
  Edit: 1,
} as const

const getEditableProperties = (people: People) => {
  return {
    height: people.height,
    mass: people.mass,
    hair_color: people.hair_color,
    eye_color: people.eye_color,
    skin_color: people.skin_color,
  }
}

type FormShape = ReturnType<typeof getEditableProperties>

export const PeopleEditableCard = (props: PeopleEditableCardProps) => {
  const queryClient = useQueryClient()
  const form = useForm({ defaultValues: { ...getEditableProperties(props) } })

  const [mode, setMode] = useState<ValuesOf<typeof Mode>>(Mode.Read)

  const handleEdit = () => {
    if (mode === Mode.Edit) {
      form.reset()
      setMode(Mode.Read)
    } else {
      setMode(Mode.Edit)
    }
  }

  const onSubmit = (form: FormShape) => {
    queryClient.setQueryData(PeopleKeys.getPerson(props.id), { ...props, ...form })
    setMode(Mode.Read)
  }

  const isEditMode = mode === Mode.Edit

  return (
    <Card
      component={isEditMode ? 'form' : 'div'}
      onSubmit={form.handleSubmit(onSubmit)}
      variant="outlined"
      sx={{ width: 'fit-content', minWidth: 320, mx: 'auto', position: 'relative' }}
    >
      <Box sx={{ position: 'absolute', right: 8, top: 8, display: 'flex', flexDirection: 'column', gap: 1 }}>
        <IconButton aria-label="edit" onClick={handleEdit}>
          {isEditMode ? <CloseIcon /> : <EditIcon />}
        </IconButton>
        <IconButton sx={{ visibility: isEditMode ? 'visible' : 'hidden' }} color="success" type="submit">
          <Grow in={isEditMode}>
            <CheckIcon />
          </Grow>
        </IconButton>
      </Box>
      <CardContent sx={{ p: 0, ':last-child': { p: 0 } }}>
        <Box p={2} width="fit-content" mx="auto" textAlign="center">
          <AccountCircleIcon sx={{ fontSize: 120 }} />
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
        </Box>
        <Divider />
        <Box display="flex" flexDirection="column" gap={2} mt={2} p={2}>
          <StatInfo title="Height" value={props.height} editing={isEditMode} control={form.control} name="height" />
          <StatInfo title="Mass" value={props.mass} editing={isEditMode} control={form.control} name="mass" />
          <StatInfo title="Hair color" value={props.hair_color} editing={isEditMode} control={form.control} name="hair_color" />
          <StatInfo title="Eye color" value={props.eye_color} editing={isEditMode} control={form.control} name="eye_color" />
          <StatInfo title="Skin color" value={props.skin_color} editing={isEditMode} control={form.control} name="skin_color" />
        </Box>
      </CardContent>
    </Card>
  )
}

type StatInfoProps = {
  title: string
  value: string | number
  editing?: boolean
  name: keyof FormShape
  control: Control<FormShape>
}

const StatInfo = (props: StatInfoProps) => {
  return (
    <Box display="flex" alignItems="center" sx={{ height: 30 }}>
      <Typography sx={{ mr: 1 }} variant="body2" color="text.primary">
        {props.title}
      </Typography>
      {props.editing ? (
        <Controller
          name={props.name}
          control={props.control}
          render={({ field }) => {
            return (
              <TextField
                sx={{ ml: 'auto', maxWidth: 100 }}
                inputProps={{ sx: { textAlign: 'right' } }}
                margin="none"
                size="small"
                variant="standard"
                placeholder={String(props.value)}
                {...field}
              />
            )
          }}
        />
      ) : (
        <Typography sx={{ ml: 'auto' }} variant="body2" color="text.secondary" textAlign="center">
          {props.value}
        </Typography>
      )}
    </Box>
  )
}
