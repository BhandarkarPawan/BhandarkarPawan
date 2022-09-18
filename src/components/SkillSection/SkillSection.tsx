import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../App';
import { QUERY } from '../../constants';
import SKILLS from '../../skills.json';
import Heading from '../Heading';
import SkillsMasonry from '../SkillsMasonry';

export interface IStyledProps {
  fixed?: boolean;
}
export interface IProps {
  children?: React.ReactNode;
  delegated?: any;
}

const SkillsSection: React.FC<IProps> = (props) => {
  const fixed = useContext(AppContext);

  return (
    <Wrapper fixed={fixed} {...props.delegated}>
      <Heading>Skills</Heading>
      <SkillsMasonry skills={SKILLS} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  ${(props: IStyledProps) =>
    props.fixed &&
    `
    display: flex;
    flex-direction: column;
    gap: 40px;
    grid-area: skills;

    @media ${QUERY.phoneAndDown}{
        gap: 20px;
    }
  `}
`;

export default SkillsSection;
