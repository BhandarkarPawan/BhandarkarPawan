import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../App';
import { QUERY } from '../../constants';
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
    <Wrapper id="projects" fixed={fixed} {...props.delegated}>
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

    @media ${QUERY.phoneAndDown}{
        gap: 20px;
    }
  `}
`;

export default DesignSection;
