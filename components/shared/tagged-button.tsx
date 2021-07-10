import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';
import { IoLayers } from 'react-icons/io5';

const TaggedButton = () => {
  return (
    <Box d="flex" alignContent="space-between" background="beige">
      <Button
        color="white"
        background="transparent"
        _hover={{ bg: 'transparent' }}
        leftIcon={<IoLayers />}
      >
        Inventory
      </Button>
      <Button />
    </Box>
  );
};

export default TaggedButton;
