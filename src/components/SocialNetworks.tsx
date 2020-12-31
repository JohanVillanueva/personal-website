import { faDev, faFacebookF, faGithub, faLinkedinIn, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons';
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
      <IconButton icon={faFacebookF} link="https://facebook.com/johanfvn" />
      <IconButton icon={faLinkedinIn} link="https://linkedin.com/in/johanfvn" />
      <IconButton icon={faTwitter} link="https://twitter.com/johanfvn" />
      <IconButton icon={faGithub} link="https://github.com/JohanVillanueva" />
      <IconButton icon={faTwitch} link="https://twitch.tv/johanfvn" />
      <IconButton icon={faDev} link="https://dev.to/johanfvn" />
    </StyledSocialNetwork>
  );
};

export default SocialNetworks;
