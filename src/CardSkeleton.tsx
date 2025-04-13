import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function CardSkeleton() {
  return (
    <Card.Root>
      <Skeleton height="200px" />
      <Card.Header fontSize="xl"></Card.Header>
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
}
