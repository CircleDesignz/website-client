import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@chakra-ui/popover';
import { Heading, Icon, IconButton, PopoverHeader } from '@chakra-ui/react';
import { IoNotifications, IoNotificationsOutline } from 'react-icons/io5';

const Notifications = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton
          aria-label="Notifications"
          variant="ghost"
          _hover={{ bg: 'transparent' }}
          _active={{ bg: 'transparent' }}
          icon={
            <Icon
              boxSize={5}
              color="black"
              as={IoNotificationsOutline}
              _hover={{ color: 'gray.400' }}
            />
          }
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <Heading>Notifications</Heading>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  );
};

export default Notifications;
