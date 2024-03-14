import { Heading } from '@components/atoms/Heading'
import { Text } from '@components/atoms/Text'

import { StationCardContainer, StationCategory, StationData } from './styles'

import { IStation } from 'src/shared/types/station'

interface StationCardProps extends IStation {}

export function StationCard({
  address,
  hour,
  phone,
  title,
  type,
}: StationCardProps) {
  return (
    <StationCardContainer>
      <Heading content={title} level={5} size="xsmall" color="gray_300" />
      <StationCategory>
        <Heading
          content="Categoria:"
          level={5}
          size="xxsmall"
          color="gray_300"
        />

        <Text content={type} size="xxsmall" color="gray_100" />
      </StationCategory>

      <StationData>
        <Text content={hour} size="xxsmall" color="gray_100" />
        <Text content={address} size="xxsmall" color="gray_100" />
        <Text content={phone} size="xxsmall" color="gray_100" />
      </StationData>
    </StationCardContainer>
  )
}
