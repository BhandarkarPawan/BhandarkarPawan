import styled from 'styled-components';
import Design, { IDesign } from '../Design/Design';

export interface IProps {
  delegated?: any;
}

const DESIGNS: IDesign[] = [
  {
    name: 'Emergency Social Network',
    imgUrl: 'ESNDesign.png',
    designUrl: '',
    prototypeUrl: ''
  },
  {
    name: 'Refriendo',
    imgUrl: 'RefriendoDesign.png',
    designUrl: '',
    prototypeUrl: ''
  },
  {
    name: 'Portfolio',
    imgUrl: 'PortfolioDesign.png',
    designUrl: '',
    prototypeUrl: ''
  }
];

const DesignGrid: React.FC<IProps> = (props) => {
  return (
    <Wrapper>
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
`;

const ListItem = styled.li`
  list-style: none;
`;

export default DesignGrid;
