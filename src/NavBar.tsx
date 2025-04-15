import { HStack, Image } from "@chakra-ui/react";
import logo from "./assets/logo.webp";
import ColorModeSwitch from "./components/ColorModeSwitch";
import SearchInput from "./SearchInput";

type Props = {
  onSearch: (value: string) => void;
};

export default function NavBar({ onSearch }: Props) {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
}
