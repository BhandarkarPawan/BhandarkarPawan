import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../App';
import { QUERY } from '../../constants';
export interface IStyledProps {
  fixed?: boolean;
}
export interface IProps {
  children?: React.ReactNode;
  delegated?: any;
}

const Heading: React.FC<IProps> = (props) => {
  const fixed = useContext(AppContext);

  return (
    <Wrapper fixed={fixed} {...props.delegated}>
      {props.children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${(props: IStyledProps) =>
    props.fixed &&
    `
    font-size: calc(1rem * 48/18);
    line-height: calc(1rem * 56/18);

      @media ${QUERY.phoneAndDown}{
        font-size: calc(1rem * 36/18);
        line-height: calc(1rem * 44/18);
    }
  `}
`;

export default Heading;
