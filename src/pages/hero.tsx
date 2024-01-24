import { PageLayout } from '../shared/ui/page-layout'
import { PeopleEditableCard } from '../entities/people/ui/editable-card'
import { PeopleMock } from '~entities/people'

type HeroPageProps = {
  id: string
}

export const HeroPage = (props: HeroPageProps) => {
  return (
    <PageLayout>
      <PeopleEditableCard id={props.id} {...PeopleMock} />
    </PageLayout>
  )
}
