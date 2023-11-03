"use client";

import React from 'react';
import { ContentInstance } from '@craftercms/models';
import { getInitialProps } from '../lib/api';

import { ExperienceBuilder, RenderComponents, RenderField } from '@craftercms/experience-builder/react';

import { Footer } from '@/components/shared';
import { contentTypeMap } from '@/components/ContentMap';
import { useCrafterAppContext } from '@/components/providers/CrafterAppProvider';

export default function Home({ model }: { model: ContentInstance }) {

  const { isAuthoring } = useCrafterAppContext();

  return (
    <ExperienceBuilder model={model} isAuthoring={isAuthoring}>
      <RenderField
        model={model}
        fieldId="title_s"
        component={React.Fragment}
        componentProps={{
          // Component props can simply be sent as props to RenderField, and
          // they would be passed down to Typography, however, because there's
          // a prop name collision (i.e. `component`) we can use componentProps
          // to supply the component prop directly to Typography.
        }}
      />
      <RenderComponents contentTypeMap={contentTypeMap} model={model} fieldId="content_o" />
      <Footer />
    </ExperienceBuilder>
  )
}

Home.getInitialProps = getInitialProps;
