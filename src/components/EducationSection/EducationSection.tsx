import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../App';
import { QUERY } from '../../constants';
import EducationList from '../EducationList';
import Heading from '../Heading';

export interface IStyledProps {
  fixed?: boolean;
}
export interface IProps {
  children?: React.ReactNode;
  delegated?: any;
}

const EducationSection: React.FC<IProps> = (props) => {
  const fixed = useContext(AppContext);

  return (
    <Wrapper fixed={fixed} {...props.delegated}>
      <Heading>Education</Heading>
      <EducationList />
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

      @media ${QUERY.phoneAndDown}{
        gap: 20px;
    }
  `}
`;

export default EducationSection;
