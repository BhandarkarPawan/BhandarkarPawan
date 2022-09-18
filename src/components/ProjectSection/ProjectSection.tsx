import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../App';
import Heading from '../Heading';
import ProjectGrid from '../ProjectGrid';

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
      <Heading>Projects</Heading>
      <ProjectGrid />
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
    grid-area: projects;
  `}
`;

export default DesignSection;