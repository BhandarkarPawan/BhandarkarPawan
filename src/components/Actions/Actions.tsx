import styled from 'styled-components';
import DownloadLink from '../DownloadLink';
import SocialLinks from '../SocialLinks';

export interface IProps {
  children?: React.ReactNode;
  delegated?: any;
}

const Actions: React.FC<IProps> = (props) => {
  return (
    <Wrapper {...props.delegated}>
      <DownloadLink>Resume</DownloadLink>
      <SocialLinks />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Actions;
