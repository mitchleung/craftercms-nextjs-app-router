import { contentTypeMap } from '@/components/ContentMap';
import { Footer } from '@/components/shared'
import { ExperienceBuilder, RenderComponents, RenderField } from '@craftercms/experience-builder/react'
import { ContentInstance } from '@craftercms/models';
import React from 'react'

const PageBody = ({
  model,
  isAuthoring,
}: {
  model: ContentInstance
  isAuthoring: boolean
}) => {
  return (
    <ExperienceBuilder model={model} isAuthoring={isAuthoring}>
      <div>
        {JSON.stringify(model)}
      </div>
      <RenderField
        model={model}
        fieldId="title_s"
        component={"div"}
        componentProps={{
          // Component props can simply be sent as props to RenderField, and
          // they would be passed down to Typography, however, because there's
          // a prop name collision (i.e. `component`) we can use componentProps
          // to supply the component prop directly to Typography.
          component: 'h1'
        }}
      />
      <RenderComponents contentTypeMap={contentTypeMap} model={model} fieldId="content_o" />
      <Footer />
    </ExperienceBuilder>
  )
}

export default PageBody