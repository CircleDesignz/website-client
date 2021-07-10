import React from 'react';
import { IconButton } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import { As } from '@chakra-ui/system';

type Props = {
  label: string;
  onClick?: React.MouseEventHandler | undefined;
  iconBoxSize?: number;
  iconColor?: string;
  icon: As;
};

const PlainIconButton = ({
  label,
  onClick,
  iconBoxSize,
  iconColor,
  icon,
}: Props) => {
  return (
    <IconButton
      aria-label={label}
      variant="ghost"
      onClick={onClick}
      _hover={{bg: "transparent"}}
      icon={
        <Icon
          boxSize={iconBoxSize}
          color={iconColor}
          as={icon}
          _hover={{ color: 'gray.400' }}
        />
      }
    />
  );
};

export default PlainIconButton;
