import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import logo from '../assets/imgs/logo_white.svg';

const StyledHeader = styled.header`
  position: absolute;
  top: 24px;
  padding: 0 32px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & {
    img {
      height: 3rem;
      opacity: 0.7;
    }

    .resume {
      color: white;
      cursor: pointer;
      text-decoration: none;
      transition: transform 0.2s ease-out;
      text-shadow: 0 0 4px white;

      & .icon {
        margin-left: 12px;
      }

      &:hover {
        text-shadow: 0 0 12px white;
      }

      &:active {
        transform: scale(0.95);
      }
    }
  }
`;

const RESUME_URL = 'https://bit.ly/38LvN14';

const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="Logo" />
      <a href={RESUME_URL} target="_blank" className="resume" rel="noreferrer">
        RESUME
        <FontAwesomeIcon icon={faDownload} className="icon" />
      </a>
    </StyledHeader>
  );
};

export default Header;
