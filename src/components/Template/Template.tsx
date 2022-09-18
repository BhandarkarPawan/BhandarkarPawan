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

const Template: React.FC<IProps> = (props) => {
  const fixed = useContext(AppContext);

  return <Wrapper {...props.delegated}>sup</Wrapper>;
};

const Wrapper = styled.div``;

export default Template;
