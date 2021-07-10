import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@chakra-ui/popover';
import { Heading, PopoverHeader } from '@chakra-ui/react';
import PlainIconButton from '../../../shared/icon-button-plain';
import { IoNotifications } from 'react-icons/io5';

type Props = {
  icon?: React.ReactElement | undefined;
};

const Notifications = ({ icon }: Props) => {
  return (
    <Popover>
      <PopoverTrigger>
        <PlainIconButton
          label="Notifications"
          iconBoxSize={5}
          iconColor="black"
          icon={IoNotifications}
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
