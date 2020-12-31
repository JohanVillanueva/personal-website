import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const StyledLiveDot = styled(FontAwesomeIcon)`
  animation: blinker 1s cubic-bezier(0.5, 0, 1, 1) infinite alternate;
  margin-right: 8px;
  vertical-align: baseline;
  color: #4bb543;
  filter: drop-shadow(0 0 2px #6ecc67);

  @keyframes blinker {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

const LiveDot: React.FC = () => {
  return <StyledLiveDot icon={faCircle} />;
};

export default LiveDot;
