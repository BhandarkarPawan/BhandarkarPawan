import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../App';
import Skill, { ISkill } from '../Skill/Skill';

export interface IStyledProps {
  fixed?: boolean;
}
export interface IProps {
  skills: ISkill[];
  delegated?: any;
}

const SkillsMasonry: React.FC<IProps> = (props) => {
  const fixed = useContext(AppContext);

  return (
    <Wrapper fixed={fixed} {...props.delegated}>
      {props.skills.map((skill, i) => (
        <ListItem key={i}>
          <Skill skill={skill} />
        </ListItem>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  ${(props: IStyledProps) =>
    props.fixed &&
    `  display: flex;
      flex-wrap: wrap;
      max-width: 670px;
      gap: 8px;
      padding: 0px;
  `}
`;

const ListItem = styled.li`
  list-style: none;
  ${(props: IStyledProps) => props.fixed && ``}
`;

export default SkillsMasonry;
