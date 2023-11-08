// "use client";

import React from 'react';
import { useCrafterAppContext } from '@/components/providers/CrafterAppProvider';

import { getInitialProps } from '../../lib/api';
import HomeBody from './_components/HomeBody';


export default async function Home() {
  const { model } = await getInitialProps({ params: { id: [] } });
  console.log("MODEL >>>>>>>", model);

  const { isAuthoring } = useCrafterAppContext();
  if (!model) {
    return <>Loading...</>
  }
  
  return (
    <>
    test
    {/* <HomeBody
      model={model}
      isAuthoring={isAuthoring}
    /> */}
    </>
  )
}

// Home.getInitialProps = getInitialProps;
