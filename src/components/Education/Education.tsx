import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../App';
import { QUERY } from '../../constants';
export interface ICollege {
  name: String;
  degree: String;
  location: String;
  logo: String;
}

export interface IStyledProps {
  fixed?: boolean;
}
export interface IProps {
  college: ICollege;
  delegated?: any;
}

const Education: React.FC<IProps> = (props) => {
  const fixed = useContext(AppContext);

  const logoPath = `assets/${props.college.logo}`;
  return (
    <Wrapper fixed={fixed} {...props.delegated}>
      <CollegeLogo fixed={fixed} src={logoPath} />
      <About fixed={fixed}>
        <Name>{props.college.name}</Name>
        <Degree fixed={fixed}>{props.college.degree}</Degree>
        <Location fixed={fixed}>{props.college.location}</Location>
      </About>
    </Wrapper>
  );
};

const Wrapper = styled.figure`
  display: flex;
  ${(props: IStyledProps) =>
    props.fixed &&
    `
    gap: 24px;
    align-items: center;
  `}
`;

const CollegeLogo = styled.img`
  ${(props: IStyledProps) =>
    props.fixed &&
    `
    height: 130px;
    width: 130px; 
    flex-shrink: 0; 

    @media ${QUERY.phoneAndDown}{
        height: 110px;
        width: 110px; 
      }
  `}
`;

const About = styled.figcaption`
  display: flex;
  ${(props: IStyledProps) =>
    props.fixed &&
    `
    font-size: calc(1rem * 24/18);
    display: flex;
    flex-direction: column;
    // gap: 8px;

    @media ${QUERY.phoneAndDown}{
      font-size: calc(1rem * 18/18);
      }
  `}
`;

const Name = styled.h3``;
const Degree = styled.h4`
  ${(props: IStyledProps) =>
    props.fixed &&
    `
    color: var(--color-line);
    font-weight: 700px;
  `}
`;
const Location = styled.i`
  ${(props: IStyledProps) =>
    props.fixed &&
    `
    font-weight: 500;
    
`}
`;

export default Education;
