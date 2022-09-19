import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../App';
import { QUERY } from '../../constants';
import DownloadLink from '../DownloadLink';
import Heading from '../Heading';
import Navbar from '../Navbar';
import SocialLinks from '../SocialLinks';

export interface IStyledProps {
  fixed?: boolean;
}
export interface IProps {
  children?: React.ReactNode;
  delegated?: any;
}

const Footer: React.FC<IProps> = (props) => {
  const fixed = useContext(AppContext);

  return (
    <Wrapper id="contact" fixed={fixed} {...props.delegated}>
      <MainFooter fixed={fixed}>
        <Lead fixed={fixed}>
          <Heading>Contact</Heading>
          <Navbar />
        </Lead>
        <Message>
          Interested in working together?
          <br />
          Let’s get in touch!
        </Message>
        <Email fixed={fixed}>
          <Icon fixed={fixed} src="assets/Mail.svg" />
          pawan@bhandarkar.me
        </Email>
        <Links>
          <SocialLinks variant={'white'} />
          <DownloadLink variant="white">Resume</DownloadLink>
        </Links>
      </MainFooter>
      <Attribution fixed={fixed}>
        <Creator fixed={fixed}>
          Designed and Developed by Pawan Bhandarkar
        </Creator>
      </Attribution>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  ${(props: IStyledProps) =>
    props.fixed &&
    `
    color: white;
    background-color: var(--color-primary);
    font-size: calc(1rem * 24/18);

  `}
`;

const MainFooter = styled.div`
  ${(props: IStyledProps) =>
    props.fixed &&
    `
    display: flex;
    flex-direction: column;
    gap: 24px;

    max-width: var(--max-width);
    width: min(100%, var(--max-width));
    margin: auto;
    padding: 50px var(--global-h-pad);


    @media ${QUERY.phoneAndDown}{
        padding-top: 25px;
        padding-bottom: 25px;
      }
  `}
`;

const Icon = styled.img`
  ${(props: IStyledProps) =>
    props.fixed &&
    `
    height: 24px;
    width: auto;
    filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7461%) hue-rotate(208deg) brightness(104%) contrast(99%);

  `}
`;

const Lead = styled.div`
  ${(props: IStyledProps) =>
    props.fixed &&
    `
      display: flex;
      justify-content: space-between;
      margin-bottom: 16px;

      @media ${QUERY.phoneAndDown}{
        margin-bottom : 0px;
        flex-direction: column;
      }
  `}
`;

const Message = styled.p``;

const Email = styled.div`
  ${(props: IStyledProps) =>
    props.fixed &&
    `
    display: flex;
    gap: 16px;
    align-items: center;
    font-size: calc(1rem * 24/18);
    font-weight: 500;
    
  `}
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  ${(props: IStyledProps) => props.fixed && ``}
`;

const Attribution = styled.div`
  ${(props: IStyledProps) =>
    props.fixed &&
    `
      background-color: var(--color-primary-dark);
      font-size: calc(1rem * 16/18);
      padding: 24px 0px;
      font-weight: 500;

      @media ${QUERY.phoneAndDown}{
        padding: 8px 0px;

      }
`}
`;
const Creator = styled.div`
  ${(props: IStyledProps) =>
    props.fixed &&
    `
    max-width: var(--max-width);
    width: min(100%, var(--max-width));
    margin: auto;
    padding: var(--global-h-pad);
`}
`;

export default Footer;
