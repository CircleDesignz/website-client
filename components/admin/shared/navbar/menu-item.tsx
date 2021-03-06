import {
  As,
  Badge,
  Box,
  Heading,
  HStack,
  Icon,
  Spacer,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

type Props = {
  name: string;
  newPath: string;
  icon: As;
  tagValue?: number | undefined;
};

const MenuItem = ({ name, newPath, icon, tagValue }: Props) => {
  const router = useRouter();

  const handleReplaceRoute = () => {
    router.replace(newPath);
  };

  return (
    <Box
      as="button"
      height="24px"
      textColor="white"
      width="100%"
      onClick={handleReplaceRoute}
      _hover={{ color: 'gray.400' }}
    >
      <HStack>
        <Icon as={icon} />
        <Heading size="sm">{name}</Heading>
        <Spacer />
        {tagValue !== undefined ? (
          <Badge size="sm" variant="outline">
            {tagValue}
          </Badge>
        ) : null}
      </HStack>
    </Box>
  );
};

export default MenuItem;
