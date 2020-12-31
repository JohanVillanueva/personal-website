import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const StyledIconButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: 1px solid transparent;
  border-radius: 50%;
  width: 1.8rem;
  height: 1.8rem;
  color: white;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  margin: 8px;
  padding: 16px;

  & {
    .icon {
      filter: drop-shadow(0 0 1px white);
      transition: filter 0.3s ease-out;
    }

    &:hover .icon {
      filter: drop-shadow(0 0 12px white);
    }

    &:active {
      transform: scale(0.9);
    }

    &.visited {
      background: transparent;
    }
  }
`;

interface IconButtonProps {
  icon: IconProp;
  link: string;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, link }: IconButtonProps) => {
  return (
    <StyledIconButton href={link} target="_blank">
      <FontAwesomeIcon icon={icon} className="icon" />
    </StyledIconButton>
  );
};

export default IconButton;
