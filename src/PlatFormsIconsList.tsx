import {
  FaWindows,
  FaPlaystation,
  FaAndroid,
  FaXbox,
  FaLinux,
  FaApple,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { PlatForm } from "./hooks/useGames";
import { IconType } from "react-icons";
import { HStack, Icon } from "@chakra-ui/react";

type Props = {
  platforms: PlatForm[];
};

export default function PlatFormsIconsList({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
  };
  return (
    <>
    <HStack marginY={1}>
    {platforms.map((p) => (
        <Icon key={p.slug} as={iconMap[p.slug]} color={'gray.500'} />
      ))}
    </HStack>
      
    </>
  );
}
