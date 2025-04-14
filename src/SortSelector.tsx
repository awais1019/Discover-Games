import { Menu, Portal } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const sortOrder = [
  { value: "", label: "Relevance" },
  { value: "-date", label: "Date Added" },
  { value: "name", label: "Name" },
  { value: "-released", label: "Release date" },
  { value: "-metacritic", label: "Popularity" },
  { value: "-rating", label: "Average rating" },
];

type Props={
    onSelectedOrder:(value:string)=>void;
    selectedOrder:string;
}

export default function SortSelector({onSelectedOrder,selectedOrder}:Props) {

    const currentSortOrder=sortOrder.find(order=>order.value===selectedOrder)
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Order by:{currentSortOrder?.label||"Relevance"}
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrder.map((order) => (
              <Menu.Item onClick={() =>onSelectedOrder(order.value)} key={order.value} value={order.value}>
                {order.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
