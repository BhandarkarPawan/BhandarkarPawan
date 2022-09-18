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
