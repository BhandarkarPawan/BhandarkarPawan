import styled from 'styled-components';

export interface IProps {
  children?: React.ReactNode;
  delegated?: any;
}

const NavLink: React.FC<IProps> = (props) => {
  return <Wrapper {...props.delegated}>{props.children}</Wrapper>;
};

const Wrapper = styled.a``;

export default NavLink;
