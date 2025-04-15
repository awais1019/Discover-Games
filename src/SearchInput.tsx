import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

type Props = {
  onSearch: (value: string) => void;
};

export default function SearchInput({ onSearch }: Props) {
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = searchRef.current?.value.trim();
    if (value) {
      onSearch(value);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputGroup startElement={<BsSearch />}>
        <Input ref={searchRef} borderRadius={"15px"} placeholder="Search games..." />
      </InputGroup>
    </form>
  );
}
