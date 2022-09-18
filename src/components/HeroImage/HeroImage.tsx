import styled from 'styled-components';

export interface IProps {
  children?: React.ReactNode;
  delegated?: any;
}

const HeroImage: React.FC<IProps> = (props) => {
  return <Wrapper src="assets/HeroImage.jpg"></Wrapper>;
};

const Wrapper = styled.img`
  width: 600px;
`;

export default HeroImage;
