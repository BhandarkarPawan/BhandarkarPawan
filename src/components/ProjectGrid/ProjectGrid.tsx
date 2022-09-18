import styled from 'styled-components';
import Project, { IProject } from '../Project/Project';

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
  return (
    <Wrapper>
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
`;

const ListItem = styled.li`
  list-style: none;
`;

export default ProjectGrid;
