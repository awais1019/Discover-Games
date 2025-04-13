import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { usePlatforms } from "./hooks/usePlatforms";
import { PlatForm } from "./hooks/useGames";


type Props={
    onSelected:(platform:PlatForm)=>void;
    selectedPlatform:PlatForm|null;
}

export default function PlatFormSelector({onSelected,selectedPlatform}:Props) {
  const { data: platforms } = usePlatforms();
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
           {selectedPlatform?.name||"Platforms"}
      
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {platforms.map((platform) => (
              <Menu.Item onClick={()=>onSelected(platform)} value={platform.name}>{platform.name}</Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
