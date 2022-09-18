import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../App';
export interface ISkill {
  name: String;
  url: string;
}

export interface IStyledProps {
  fixed?: boolean;
}
export interface IProps {
  skill: ISkill;
  delegated?: any;
}

const Skill: React.FC<IProps> = (props) => {
  const fixed = useContext(AppContext);

  return <Wrapper src={props.skill.url} />;
};

const Wrapper = styled.img``;

export default Skill;
