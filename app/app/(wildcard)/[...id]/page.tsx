import React from 'react'
import { getInitialProps, loadPages } from '@/lib/api'
import { useCrafterAppContext } from '@/components/providers/CrafterAppProvider'
import PageBody from './_components/PageBody'

export async function generateStaticParams() {

  const paths = await loadPages();

  return {
    paths,
    fallback: true,
  }
}

const WildCardPage = async ({
  params
}: {
  params: { id: string[] }
}) => {
  const { id } = params;

  const { model } = await getInitialProps({ params: { id } });
  const { isAuthoring } = useCrafterAppContext();

  return (
    <PageBody
      model={model}
      isAuthoring={isAuthoring}
    />
  )
}

export default WildCardPage