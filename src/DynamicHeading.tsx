import React from 'react'
import { GameQurey } from './App'
import { Heading } from '@chakra-ui/react';

type Props = {
    gameQuery:GameQurey;
}



export default function DynamicHeading({gameQuery}: Props) {
    const heading=`${gameQuery.genre?.name || ' '} ${gameQuery.platform?.name || " "} Games`
  return (
    <Heading as={'h1'} marginY={6}>{heading}</Heading>
  )
}