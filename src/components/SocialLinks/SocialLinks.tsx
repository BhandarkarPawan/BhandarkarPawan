import styled from 'styled-components';
import SocialLink from '../SocialLink';

export interface IProps {
  children?: React.ReactNode;
  delegated?: any;
}

const SocialLinks: React.FC<IProps> = (props) => {
  return (
    <Wrapper {...props.delegated}>
      <SocialLink>Github</SocialLink>
      <SocialLink>Twitter</SocialLink>
      <SocialLink>LinkedIn</SocialLink>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default SocialLinks;
