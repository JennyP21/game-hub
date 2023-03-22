import {
  HStack,
  List,
  ListItem,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <List>
      <ListItem>
        <HStack paddingY="5px">
          <SkeletonCircle />
          <SkeletonText width="70%" noOfLines={2} />
        </HStack>
      </ListItem>
    </List>
  );
};

export default GenreListSkeleton;
