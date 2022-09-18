import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../App';

export interface IStyledProps {
  fixed?: boolean;
  variant?: String;
}

export interface ISocial {
  name: String;
  url: String;
  image: String;
}
export interface IProps {
  social: ISocial;
  variant?: String;
  delegated?: any;
}

const SocialLink: React.FC<IProps> = (props) => {
  const fixed = useContext(AppContext);
  const imgSrc = `assets/${props.social.image}`;
  const name = `${props.social.name}`;
  const url = `${props.social.url}`;
  const variant = props.variant || 'black';

  return (
    <Wrapper href={url}>
      <Icon
        {...props.delegated}
        variant={variant}
        fixed={fixed}
        src={imgSrc}
        alt={name}
      />
    </Wrapper>
  );
};

const Wrapper = styled.a``;

const Icon = styled.img`
  ${(props: IStyledProps) =>
    props.fixed &&
    `
    height: 32px;
    width: auto;

    ${
      props.variant === 'white' &&
      'filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7461%) hue-rotate(208deg) brightness(104%) contrast(99%)'
    };
  `}
`;

export default SocialLink;
