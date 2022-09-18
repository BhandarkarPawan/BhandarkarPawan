import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../App';
export interface IDesign {
  name: String;
  imgUrl: String;
  designUrl: String;
  prototypeUrl: String;
}

export interface IStyledProps {
  fixed?: boolean;
}
export interface IProps {
  design: IDesign;
  delegated?: any;
}

const Design: React.FC<IProps> = (props) => {
  const imgSrc = `assets/${props.design.imgUrl}`;
  const fixed = useContext(AppContext);

  return (
    <Wrapper fixed={fixed} {...props.delegated}>
      <Thumbnail fixed={fixed} src={imgSrc} />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  ${(props: IStyledProps) =>
    props.fixed &&
    `
    width: 100%;
    height: 100%;
    border-radius: 8px;
    overflow: hidden;
  `};
`;

const Thumbnail = styled.img`
  ${(props: IStyledProps) =>
    props.fixed &&
    `
      width: 100%;
      height: 100%;
      border-radius: 8px;
      line-height: 0px;
      object-fit: cover;
  `};
`;

export default Design;
