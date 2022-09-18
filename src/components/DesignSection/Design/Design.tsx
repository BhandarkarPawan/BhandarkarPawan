import styled from 'styled-components';

export interface IDesign {
  name: String;
  imgUrl: String;
  designUrl: String;
  prototypeUrl: String;
}

export interface IProps {
  design: IDesign;
  delegated?: any;
}

const Design: React.FC<IProps> = (props) => {
  const imgSrc = `assets/${props.design.imgUrl}`;
  return (
    <Wrapper {...props.delegated}>
      <Thumbnail src={imgSrc} />
    </Wrapper>
  );
};

const Wrapper = styled.article``;

const Thumbnail = styled.img``;

export default Design;
