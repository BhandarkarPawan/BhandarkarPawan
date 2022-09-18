import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../App';
import DownloadLink from '../DownloadLink';
import SocialLinks from '../SocialLinks';

export interface IStyledProps {
  fixed?: boolean;
}
export interface IProps {
  children?: React.ReactNode;
  delegated?: any;
}

const Actions: React.FC<IProps> = (props) => {
  const fixed = useContext(AppContext);

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
  ${(props: IStyledProps) => props.fixed && ``}
`;

export default Actions;
