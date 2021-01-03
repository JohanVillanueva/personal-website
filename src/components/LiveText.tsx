import React from 'react';
import styled from 'styled-components';
import LiveDot from './LiveDot';

const StyledLiveText = styled.a`
  display: flex;
  position: fixed;
  bottom: 32px;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #00a8e8;
  font-weight: 300;
`;

interface LiveTextProps {
  message: string;
  link: string;
}

const LiveText: React.FC<LiveTextProps> = ({ message, link }: LiveTextProps) => {
  return (
    <StyledLiveText href={link} target="_blank" rel="noreferrer">
      <LiveDot />
      {message}
    </StyledLiveText>
  );
};

export default LiveText;
