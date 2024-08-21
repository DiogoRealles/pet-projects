import React from 'react'

import { Heading } from '@components/atoms/Heading'
import { Text } from '@components/atoms/Text'

import { TitleSectionContainer } from './styles'

interface TitleSectionProps {
  title: string
  subtitle: string
  titleWidth?: string
  subtitleWidth?: string
}

export const TitleSection: React.FC<TitleSectionProps> = ({
  title,
  titleWidth,
  subtitle,
  subtitleWidth,
}) => {
  return (
    <TitleSectionContainer>
      <Heading
        content={title}
        color="gray_300"
        size="xlarge"
        level={1}
        mobileSize="large"
        align="center"
        maxWidth={titleWidth}
        mobilePadding={true}
      />

      <Text
        content={subtitle}
        color="gray_100"
        size="xsmall"
        mobileSize="xxsmall"
        lineHeight={160}
        maxWidth={subtitleWidth}
        align="center"
        mobilePadding={true}
      />
    </TitleSectionContainer>
  )
}
