import styled from 'styled-components';
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
    gitUrl: 'https://github.com/BhandarkarPawan/kanban-task-management',
    webUrl: 'https://kanbhan.netlify.app'
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
    gitUrl: 'https://github.com/BhandarkarPawan/skilled-elearning-landing-page',
    webUrl: 'https://bhandarkar-elearning.netlify.app'
  },
  {
    name: 'Rock Paper Scissors Lizard Spock',
    imgUrl: 'RPSLSProject.png',
    gitUrl: 'https://github.com/BhandarkarPawan/rock-paper-scissors',
    webUrl: 'https://bhandarkar-rpsls.netlify.app'
  },
  {
    name: 'Product Preview',
    imgUrl: 'PreviewProject.png',
    gitUrl: 'https://github.com/BhandarkarPawan/product-preview-card-component',
    webUrl: 'https://bhandarkarpawan-product-preview-card-component.netlify.app'
  },
  {
    name: 'Splitter',
    imgUrl: 'SplitterProject.png',
    gitUrl: 'https://github.com/BhandarkarPawan/tip-calculator',
    webUrl: 'https://tipped.netlify.app'
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

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--card-width), 1fr));
  gap: var(--card-gap);
`;

const ListItem = styled.li`
  list-style: none;
  ${(props: IStyledProps) => props.fixed && ``}
`;

export default ProjectGrid;
