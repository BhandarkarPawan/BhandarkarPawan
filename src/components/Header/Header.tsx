import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../App';
import { QUERY } from '../../constants';
import Logo from '../Logo';
import Navbar from '../Navbar';

export interface IStyledProps {
  fixed?: boolean;
}
export interface IProps {
  children?: React.ReactNode;
  delegated?: any;
}

const Header: React.FC<IProps> = (props) => {
  const fixed = useContext(AppContext);

  return (
    <Wrapper fixed={fixed} {...props.delegated}>
      <Logo />
      <Navbar />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  ${(props: IStyledProps) =>
    props.fixed &&
    `
    padding:var(--global-h-pad);
    padding-top: 60px;
    align-items: center;

    max-width: var(--max-width);
    width: min(100%, var(--max-width));
    margin: auto;

    @media ${QUERY.phoneAndDown}{
      padding-top: 30px;
      flex-direction: column;
      width: 100%;
    }
  `}
`;

export default Header;
