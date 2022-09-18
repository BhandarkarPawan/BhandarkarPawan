import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../App';
import DesignGrid from '../DesignGrid';
import Heading from '../Heading';

export interface IStyledProps {
  fixed?: boolean;
}
export interface IProps {
  delegated?: any;
}

// TODO: Use a JSON

const DesignSection: React.FC<IProps> = (props) => {
  const fixed = useContext(AppContext);

  return (
    <Wrapper fixed={fixed} {...props.delegated}>
      <Heading>Designs</Heading>
      <DesignGrid />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  ${(props: IStyledProps) =>
    props.fixed &&
    `
    display: flex;
    flex-direction: column;
    gap: 40px;
    grid-area: designs;
  `}
`;

export default DesignSection;
