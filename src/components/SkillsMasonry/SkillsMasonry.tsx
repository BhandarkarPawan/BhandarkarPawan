import styled from 'styled-components';
import Skill, { ISkill } from '../Skill/Skill';

export interface IProps {
  skills: ISkill[];
  delegated?: any;
}

const SkillsMasonry: React.FC<IProps> = (props) => {
  return (
    <Wrapper {...props.delegated}>
      {props.skills.map((skill, i) => (
        <ListItem key={i}>
          <Skill skill={skill} />
        </ListItem>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  /* display: flex; */
  flex-wrap: wrap;
  max-width: 670px;
  gap: 16px;
  padding: 0px;
`;

const ListItem = styled.li`
  list-style: none;
`;

export default SkillsMasonry;
