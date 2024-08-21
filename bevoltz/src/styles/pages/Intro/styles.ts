import styled, { css } from 'styled-components'

import { CaretDown } from '@phosphor-icons/react'
import * as Accordion from '@radix-ui/react-accordion'

export const IntroContainer = styled('div')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    background: linear-gradient(100.83deg, #f7f9f8 6.32%, #edeef0 71.74%);
  `}
`

export const TextBox = styled('div')`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 6rem 0px;
`

export const ImageBox = styled('div')`
  display: flex;
  width: 100%;
  justify-content: space-between;

  img {
    flex: 1;
    max-width: 100%;
  }

  @media (max-width: 1580px) {
    img {
      height: auto;
    }

    & > *:nth-child(1) {
      display: none;
    }

    & > *:nth-child(2) {
      color: green;
    }

    & > *:nth-child(3) {
      display: none;
    }
  }
`

export const InfoContainer = styled('div')``

export const InfoArea = styled('div')`
  display: flex;
  justify-content: space-between;
  margin-top: 15rem;
  margin-bottom: 15rem;
  height: 247px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

export const InfoBoxText = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 130px;
  gap: 30px;
`

export const Separator = styled('div')`
  ${({ theme }) => css`
    display: block;
    width: 5px;
    height: 129px;
    background-color: ${theme.colors.gray_100};
  `}
`

export const JourneyContainer = styled('div')`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.gray_50};
  `}
`

export const JourneyArea = styled('div')`
  max-width: 1200px;
  margin: 0 auto;
  padding: 130px 0px;
  display: flex;
  flex-direction: column;
  gap: 130px;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 1440px) {
    max-width: 100%;
  }
`

export const StationContainer = styled('div')`
  padding-top: 132px;
  padding-bottom: 132px;

  @media (max-width: 500px) {
    padding-top: 64px;
    padding-bottom: 64px;
  }
`

export const StationArea = styled('div')`
  padding-top: 132px;
  padding-bottom: 132px;
`

export const StationSearch = styled('div')`
  display: flex;
  margin-top: 90px;

  gap: 35px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

export const StationMapBox = styled('div')`
  display: flex;
  margin-top: 30px;
  gap: 50px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

export const StationMap = styled('div')`
  flex: 1.8;
  max-height: 400px;

  img {
    width: 100%;
    height: auto;
  }
`

export const StationFilter = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;
  height: 400px;
  overflow-y: scroll;
  padding-right: 20px;
`

export const AppContainer = styled('div')`
  ${({ theme }) => css`
    background-color: ${theme.colors.green_100};
    padding-top: 100px;
    padding-bottom: 100px;
    margin-top: 200px;

    @media (max-width: 1000px) {
      margin-top: 0px;
    }
  `}
`
export const AppArea = styled('div')`
  display: flex;
  gap: 70px;
  padding: 20px 0px;
  position: relative;
`

export const StoreIcons = styled('div')`
  display: flex;
  gap: 30px;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const AppTextBox = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media (max-width: 1000px) {
    h2,
    p {
      text-align: center;
    }
  }
`

export const AppTextImage = styled('div')`
  position: absolute;
  right: 0px;
  top: -250px;

  @media (max-width: 1000px) {
    display: none;
  }
`

export const FaqContainer = styled('div')`
  padding: 400px 0px;

  @media (max-width: 1000px) {
    padding: 200px 0px;
  }
`

export const FaqArea = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 100px;
`

export const AccordionContainer = styled('div')``

export const AccordionTrigger = styled(Accordion.Trigger)`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 23px;
    border: none;
    background-color: ${theme.colors.gray_50};
    border-radius: ${theme.border.radius.medium};

    &[data-state='open'] {
      border-radius: 10px 10px 0px 0px;

      .iconOpen {
        display: flex;
      }

      .iconClosed {
        display: none;
      }
    }

    &[data-state='closed'] {
      .iconOpen {
        display: none;
      }

      .iconClosed {
        display: flex;
      }
    }

    @media (max-width: 500px) {
      svg {
        display: none !important;
      }
    }
  `}
`

export const AccordionRoot = styled(Accordion.Root)`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const AccordionContent = styled(Accordion.Content)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 23px 23px;
    background-color: ${theme.colors.gray_50};
    border-radius: 0px 0px 10px 10px;

    &[data-state='closed'] {
      display: none;
    }
  `}
`
