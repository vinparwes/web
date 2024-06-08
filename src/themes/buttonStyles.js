import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const brand = defineStyle(
  {
    border: '2px solid',
    borderColor: 'gray.400',
    borderRadius: 'md',
    bgColor: 'gray.100',
    background: 'solid',

    _dark: {
      border: '2px solid',
      borderColor: 'gray.200',
      textColor: 'white.200',
    },
  }
)

const iconButton = defineStyle(
  {
    border: '2px solid',
    borderColor: 'gray.400',
    borderRadius: 'md',
    backgroundColor: 'white',
    _hover: {
      bg: 'black',
      '& svg': {
        fill: 'black',
        stroke: 'white',
        transition: 'fill 0.2s, transform 0.2s',
      }
    },
    _dark: {
      border: '2px solid',
      borderColor: 'gray.200',
      textColor: 'white.200',
      backgroundColor: '#100c08',
      '& svg' : {
        stroke: 'white'
      },
      _hover: {
        bg: 'white',
        '& svg': {
          fill: 'white',
          stroke: 'black',
          transition: 'fill 0.2s, transform 0.2s',
        }
      },
    },
  }
)

const outline = defineStyle(
  {
    border: '2px dashed',
    borderRadius: 0,
    fontWeight: 'semibold',
  }
)


export const buttonTheme = defineStyleConfig(
  {
    variants: { outline, brand, iconButton },
    defaultProps: {
      variant: 'brand',
    },
  }
)
