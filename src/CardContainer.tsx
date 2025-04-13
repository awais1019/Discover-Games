import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

type Props = {
    children:ReactNode
}


export default function CardContainer({children}: Props) {
  return (
    <Box borderRadius={10} overflow="hidden">{children}</Box>
  )
}