import { HStack, Text} from '@chakra-ui/react'
import { useColorMode } from './ui/color-mode'
import { Switch } from './ui/switch'


export default function ColorModeSwitch() {
  
    const {toggleColorMode,colorMode}=useColorMode()
  return (
   
    <HStack>
    <Switch onChange={toggleColorMode} checked={colorMode==='dark'} colorPalette={'green'}/>
    <Text whiteSpace={"nowrap"}>Dark Mode</Text>
    </HStack>
  )
}
