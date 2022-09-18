import styled from 'styled-components';

export interface ICollege {
  name: String;
  degree: String;
  location: String;
  logo: String;
}

export interface IProps {
  college: ICollege;
  delegated?: any;
}

const Education: React.FC<IProps> = (props) => {
  const logoPath = `assets/${props.college.logo}`;
  return (
    <Wrapper {...props.delegated}>
      <CollegeLogo src={logoPath} />
      <About>
        <Name>{props.college.name}</Name>
        <Degree>{props.college.degree}</Degree>
        <Location>{props.college.location}</Location>
      </About>
    </Wrapper>
  );
};

const Wrapper = styled.figure`
  display: flex;
`;

const CollegeLogo = styled.img``;

const About = styled.figcaption`
  display: flex;
`;

const Name = styled.h3``;
const Degree = styled.h4``;
const Location = styled.p``;

export default Education;
