import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../App';
export interface IStyledProps {
  fixed?: boolean;
}
export interface IProps {
  children?: React.ReactNode;
  delegated?: any;
}

const HeroImage: React.FC<IProps> = (props) => {
  const fixed = useContext(AppContext);

  return <Wrapper fixed={fixed} src="assets/HeroImage.jpg"></Wrapper>;
};

const Wrapper = styled.img`
  width: 600px;
  ${(props: IStyledProps) =>
    props.fixed &&
    `
      width: 100%;
      border-radius: 8px;
      grid-area: heroimage;
  `}
`;

export default HeroImage;
