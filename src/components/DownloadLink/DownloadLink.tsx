import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../App';
export interface IStyledProps {
  fixed?: boolean;
  variant: String;
}
export interface IProps {
  children?: React.ReactNode;
  variant?: String;
  delegated?: any;
}

const DownloadLink: React.FC<IProps> = (props) => {
  const fixed = useContext(AppContext);
  const src = 'assets/Download.svg';
  const variant = props.variant || 'black';

  return (
    <Wrapper fixed={fixed} variant={variant} {...props.delegated}>
      <Icon fixed={fixed} src={src} variant={variant} />
      {props.children}
    </Wrapper>
  );
};

const Wrapper = styled.a`
  ${(props: IStyledProps) =>
    props.fixed &&
    `
    display: flex;
    align-items: center;
    text-decoration: underline;
    font-weight: 500;
    font-size: calc(1rem * 24/18);
    gap: 8px;
    transition: filter 200ms;
    
    &:hover{
      cursor: pointer;
      filter: ${
        props.variant === 'white'
          ? 'var(--filter-to-black)'
          : 'var(--filter-to-primary)'
      };
    }
  `}
`;

const Icon = styled.img`
  ${(props: IStyledProps) =>
    props.fixed &&
    `
    height: 25px;
    width: 25px;

    filter: ${props.variant === 'white' && 'var(--filter-to-white)'};

    &:hover{
      filter: ${
        props.variant === 'white'
          ? 'var(--filter-to-black)'
          : 'var(--filter-to-primary)'
      };
    }
  `}
`;
export default DownloadLink;
