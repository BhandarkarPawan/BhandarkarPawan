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

const Logo: React.FC<IProps> = (props) => {
  const fixed = useContext(AppContext);

  return <Wrapper fixed={fixed} src="assets/logo.png"></Wrapper>;
};

const Wrapper = styled.img`
  ${(props: IStyledProps) =>
    props.fixed &&
    `
      height: 84px;
      width: 327px;
      transform: translate(-13px, -1px);
  `}
`;

export default Logo;
