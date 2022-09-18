import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../App';

export interface IStyledProps {
  fixed?: boolean;
}

export interface IProps {
  children?: React.ReactNode;
  delegated?: any;
}

const NavLink: React.FC<IProps> = (props) => {
  const fixed = useContext(AppContext);

  return (
    <Wrapper fixed={fixed} {...props.delegated}>
      {props.children}
    </Wrapper>
  );
};

const Wrapper = styled.a`
  ${(props: IStyledProps) =>
    props.fixed &&
    `
      text-transform: lowercase;
      font-size: calc(1rem * 24 / 18);
  `}
`;

export default NavLink;
