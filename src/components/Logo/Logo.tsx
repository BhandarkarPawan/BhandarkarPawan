import styled from 'styled-components';

export interface IProps {
  children?: React.ReactNode;
  delegated?: any;
}

const Logo: React.FC<IProps> = (props) => {
  return <Wrapper src="assets/logo.png"></Wrapper>;
};

const Wrapper = styled.img``;

export default Logo;
