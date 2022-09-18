import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../App';
import Project, { IProject } from '../Project/Project';

export interface IStyledProps {
  fixed?: boolean;
}
export interface IProps {
  delegated?: any;
}

const PROJECTS: IProject[] = [
  {
    name: 'Kanban',
    imgUrl: 'KanbanProject.png',
    gitUrl: '',
    webUrl: ''
  },
  {
    name: 'Emergency Social Network',
    imgUrl: 'ESNProject.png',
    gitUrl: '',
    webUrl: ''
  },
  {
    name: 'E-Learning Landing Page',
    imgUrl: 'SkilledProject.png',
    gitUrl: '',
    webUrl: ''
  },
  {
    name: 'Rock Paper Scissors Lizard Spock',
    imgUrl: 'RPSLSProject.png',
    gitUrl: '',
    webUrl: ''
  },
  {
    name: 'Product Preview',
    imgUrl: 'PreviewProject.png',
    gitUrl: '',
    webUrl: ''
  },
  {
    name: 'Splitter',
    imgUrl: 'SplitterProject.png',
    gitUrl: '',
    webUrl: ''
  }
];

const ProjectGrid: React.FC<IProps> = (props) => {
  const fixed = useContext(AppContext);

  return (
    <Wrapper fixed={fixed}>
      {PROJECTS.map((project, i) => {
        return (
          <ListItem key={i}>
            <Project project={project} />
          </ListItem>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  ${(props: IStyledProps) =>
    props.fixed &&
    `
    display: grid;
    grid-template-columns:
      repeat(auto-fill, minmax(var(--card-width), 1fr));
    gap: var(--card-gap);
  `}
`;

const ListItem = styled.li`
  list-style: none;
  ${(props: IStyledProps) => props.fixed && ``}
`;

export default ProjectGrid;
