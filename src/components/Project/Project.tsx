import styled from 'styled-components';

export interface IProject {
  name: String;
  imgUrl: String;
  gitUrl: String;
  webUrl: String;
}

export interface IProps {
  project: IProject;
  delegated?: any;
}

const Project: React.FC<IProps> = (props) => {
  const imgSrc = `assets/${props.project.imgUrl}`;
  return (
    <Wrapper {...props.delegated}>
      <Thumbnail src={imgSrc} />
    </Wrapper>
  );
};

const Wrapper = styled.article``;

const Thumbnail = styled.img``;

export default Project;
