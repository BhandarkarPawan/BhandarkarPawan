import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../App';

export interface IProject {
  name: String;
  imgUrl: String;
  gitUrl: String;
  webUrl: String;
}

export interface IStyledProps {
  fixed?: boolean;
}
export interface IProps {
  project: IProject;
  delegated?: any;
}

const Project: React.FC<IProps> = (props) => {
  const fixed = useContext(AppContext);
  const name = `${props.project.name}`;

  const imgSrc = `assets/${props.project.imgUrl}`;
  return (
    <Wrapper href={props.project.webUrl} fixed={fixed} {...props.delegated}>
      <Thumbnail alt={name} src={imgSrc} />
    </Wrapper>
  );
};

const Wrapper = styled.a`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  line-height: 0px;
  object-fit: cover;

  transition: transform 200ms;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export default Project;
