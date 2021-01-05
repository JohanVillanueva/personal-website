import { faDev } from '@fortawesome/free-brands-svg-icons/faDev';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faTwitch } from '@fortawesome/free-brands-svg-icons/faTwitch';
import React from 'react';
import styled from 'styled-components';
import IconButton from './IconButton';

const StyledSocialNetwork = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SocialNetworks: React.FC = () => {
  return (
    <StyledSocialNetwork className="SocialNetworks">
      <IconButton icon={faFacebookF} link="https://facebook.com/johanfvn" description="Facebook profile" />
      <IconButton icon={faLinkedinIn} link="https://linkedin.com/in/johanfvn" description="Linkedin profile" />
      <IconButton icon={faTwitter} link="https://twitter.com/johanfvn" description="Twitter profile" />
      <IconButton icon={faGithub} link="https://github.com/JohanVillanueva" description="Github profile" />
      <IconButton icon={faTwitch} link="https://twitch.tv/johanfvn" description="Twitch profile" />
      <IconButton icon={faDev} link="https://dev.to/johanfvn" description="Dev.to profile" />
    </StyledSocialNetwork>
  );
};

export default SocialNetworks;
