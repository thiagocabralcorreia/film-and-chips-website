
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import {
  FooterContainer,
  SocialMedias,
  SocialMediaLink,
  SocialMediaIcon,
  FooterText,
  LinkedInLink
} from './styles';


export const Footer = () => {
  return (
    <FooterContainer>
      <SocialMedias>
        <SocialMediaLink
          href='https://github.com/thiagocabralcorreia' target='_blank' rel='noreferrer'
        >
          <SocialMediaIcon icon={faGithub} />
        </SocialMediaLink>
        <SocialMediaLink
          href='https://www.linkedin.com/in/thiago-cabral-correia/' target='_blank' rel='noreferrer'
        >
          <SocialMediaIcon icon={faLinkedin} />
        </SocialMediaLink>
      </SocialMedias>
      <FooterText>
        © 2022<span>|</span>FILM & CHIPS<span>|</span>REACT-REDUX PROJECT BY <LinkedInLink href='https://www.linkedin.com/in/thiago-cabral-correia/' target='_blank' rel='noreferrer'>THIAGO CABRAL CORREIA</LinkedInLink>
      </FooterText>
    </FooterContainer>
  )
};
