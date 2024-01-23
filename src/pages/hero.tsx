import { PageLayout } from '../shared/ui/page-layout'

type HeroPageProps = {
  id: string
}

export const HeroPage = (props: HeroPageProps) => {
  return <PageLayout description={props.id}></PageLayout>
}
