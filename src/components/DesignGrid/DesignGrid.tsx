import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../App';
import Design, { IDesign } from '../Design/Design';

export interface IStyledProps {
  fixed?: boolean;
}
export interface IProps {
  delegated?: any;
}

const DESIGNS: IDesign[] = [
  {
    name: 'Emergency Social Network',
    imgUrl: 'ESNDesign.png',
    designUrl:
      'https://www.figma.com/file/ZH2Wlz0W6hXuJEuEZHUxBc/FSE-SB2?node-id=0%3A1',
    prototypeUrl:
      'https://www.figma.com/proto/ZH2Wlz0W6hXuJEuEZHUxBc/FSE-SB2?page-id=0%3A1&node-id=5%3A433&starting-point-node-id=5%3A433'
  },
  {
    name: 'Refriendo',
    imgUrl: 'RefriendoDesign.png',
    designUrl:
      'https://www.figma.com/file/FpWVddCZKdJz5V7ADe4eb5/Refriendo?node-id=0%3A1',
    prototypeUrl:
      'https://www.figma.com/proto/FpWVddCZKdJz5V7ADe4eb5/Refriendo?page-id=0%3A1&node-id=107%3A711&viewport=497%2C236%2C0.04&scaling=scale-down&starting-point-node-id=107%3A711&show-proto-sidebar=1'
  },
  {
    name: 'Portfolio',
    imgUrl: 'PortfolioDesign.png',
    designUrl:
      'https://www.figma.com/file/AhZNeemQhvbr9sf25PwA57/Portfolio-NEW?node-id=1%3A2',
    prototypeUrl:
      'https://www.figma.com/proto/AhZNeemQhvbr9sf25PwA57/Portfolio-NEW?page-id=0%3A1&node-id=1%3A2&viewport=213%2C102%2C0.27&scaling=scale-down'
  }
];

const DesignGrid: React.FC<IProps> = (props) => {
  const fixed = useContext(AppContext);

  return (
    <Wrapper fixed={fixed}>
      {DESIGNS.map((design, i) => {
        return (
          <ListItem key={i}>
            <Design design={design} />
          </ListItem>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  padding: 0;
  flex-wrap: wrap;
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

export default DesignGrid;
