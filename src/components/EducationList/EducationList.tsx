import styled from 'styled-components';
import Education, { ICollege } from '../Education/Education';

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
    name: 'NMAM Institute of Technology, Nitte',
    degree: 'B.E in Computer Science',
    location: 'Nitte, India',
    logo: 'NMAMITLogo.png'
  }
];

const EducationList: React.FC<IProps> = (props) => {
  return (
    <Wrapper>
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
`;

const ListItem = styled.li`
  list-style: none;
`;

export default EducationList;
