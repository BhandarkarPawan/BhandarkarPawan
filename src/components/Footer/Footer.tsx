import styled from 'styled-components';
import DownloadLink from '../DownloadLink';
import Heading from '../Heading';
import Icon from '../Icon';
import Navbar from '../Navbar';
import SocialLinks from '../SocialLinks';

export interface IProps {
  children?: React.ReactNode;
  delegated?: any;
}

const Footer: React.FC<IProps> = (props) => {
  return (
    <Wrapper {...props.delegated}>
      <Lead>
        <Heading>Contact</Heading>
        <Navbar />
      </Lead>
      <Message>
        Interested in working together?
        <br />
        Let’s get in touch!
      </Message>
      <Email>
        <Icon />
        pawan@bhandarkar.me
      </Email>
      <Links>
        <SocialLinks />
        <DownloadLink>Resume</DownloadLink>
      </Links>
      <Attribution>Designed and Developed by Pawan Bhandarkar</Attribution>
    </Wrapper>
  );
};

const Wrapper = styled.footer``;

const Lead = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Message = styled.p``;

const Email = styled.span``;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Attribution = styled.div``;

export default Footer;
