import { Link as RouteLink,NavigationalProps } from 'wouter'

import { Link, LinkProps } from '@mui/material'

type AppLinkProps = NavigationalProps &
  LinkProps & {
    title?: string
    children?: React.ReactNode
  }

export const AppLink = (props: AppLinkProps) => {
  const { children, href, title, to, ...muiLink } = props
  const wouterProps = { href, title, to } as NavigationalProps

  return (
    <RouteLink {...wouterProps}>
      <Link {...muiLink}>{title || children}</Link>
    </RouteLink>
  )
}
