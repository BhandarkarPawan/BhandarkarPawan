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

const MaxWidth: React.FC<IProps> = (props) => {
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
      max-width: var(--max-width);
      width: min(100%, var(--max-width));
      margin: auto;
  `}
`;

export default MaxWidth;
