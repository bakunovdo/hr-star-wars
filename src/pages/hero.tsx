import { PageLayout } from '../shared/ui/page-layout'
import { PeopleEditableCard } from '../entities/people/ui/editable-card'
import { useGetPerson } from '~entities/people'
import { PageLoader } from '~shared/ui/page-loader'
import { ErrorStatus } from '~shared/ui/page-error'

type HeroPageProps = {
  id: string
}

export const HeroPage = (props: HeroPageProps) => {
  const query = useGetPerson(props.id)

  if (query.isError) {
    return (
      <PageLayout>
        <ErrorStatus message="Fetch error" />
      </PageLayout>
    )
  }

  if (query.isLoading) {
    return <PageLoader />
  }

  return <PageLayout>{query.data && <PeopleEditableCard {...query.data} />}</PageLayout>
}
