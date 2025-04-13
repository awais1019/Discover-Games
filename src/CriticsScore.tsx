import { Badge } from "@chakra-ui/react";

type Props = {
  score: number;
};

export default function CriticsScore({ score }: Props) {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      variant={"solid"}
      colorPalette={color}
      fontSize={"14px"}
      borderRadius={"5px"}
      paddingX={2}
    >
      {score}
    </Badge>
  );
}
