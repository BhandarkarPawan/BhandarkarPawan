import styled from 'styled-components';

export interface IProps {
  children?: React.ReactNode;
  delegated?: any;
}

const BodyText: React.FC<IProps> = (props) => {
  return <Wrapper {...props.delegated}>sup</Wrapper>;
};

const Wrapper = styled.div``;

export default BodyText;
