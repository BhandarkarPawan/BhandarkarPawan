import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../App';
import Education, { ICollege } from '../Education/Education';

export interface IStyledProps {
  fixed?: boolean;
}
export interface IProps {
  delegated?: any;
}

// TODO: move to JSON
const COLLEGES: ICollege[] = [
  {
    name: 'Carnegie Mellon University',
    degree: 'M.S in Software Engineering',
    location: 'Mountain View, CA',
    logo: 'CMULogo.png'
  },
  {
    name: 'NMAM Institute of Technology',
    degree: 'B.E in Computer Science',
    location: 'Nitte, India',
    logo: 'NMAMITLogo.png'
  }
];

const EducationList: React.FC<IProps> = (props) => {
  const fixed = useContext(AppContext);

  return (
    <Wrapper fixed={fixed}>
      {COLLEGES.map((college, i) => {
        return (
          <ListItem key={i}>
            <Education college={college} />
          </ListItem>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: flex;
  padding: 0;
  ${(props: IStyledProps) =>
    props.fixed &&
    `
    display: flex;
    flex-direction: column;
    gap: 40px;
    grid-area: education;
  `}
`;

const ListItem = styled.li`
  list-style: none;
  ${(props: IStyledProps) => props.fixed && ``}
`;

export default EducationList;
