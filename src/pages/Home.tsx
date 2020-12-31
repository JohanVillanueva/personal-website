import React from 'react';
import styled from 'styled-components';

import { TypewriterLabel, ProfilePic, SocialNetworks, Header, LiveText } from '../components';

const StyledHomePage = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  text-align: center;

  & {
    .name {
      font-size: 4em;
      margin-bottom: 12px;
    }

    .SocialNetworks {
      margin-top: 32px;
    }

    @media (max-width: 480px) {
      .name {
        font-size: 2.5em;
      }
    }
  }
`;

const PERSON_NAME = 'Johan Villanueva';
const JOB_LABELS = ['FRONTEND ENGINEER', 'UI/UX ENTHUSIASTIC', 'SPEAKER'];
const CURRENT_JOB = 'Currently working at Avantica Peru';
const CURRENT_COMPANY_WEBSITE_URL = 'https://www.avantica.com/';

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <StyledHomePage>
        <ProfilePic />
        <h1 className="name">{PERSON_NAME}</h1>
        <TypewriterLabel phrases={JOB_LABELS} />
        <SocialNetworks />
        <LiveText message={CURRENT_JOB} link={CURRENT_COMPANY_WEBSITE_URL} />
      </StyledHomePage>
    </>
  );
};

export default HomePage;
