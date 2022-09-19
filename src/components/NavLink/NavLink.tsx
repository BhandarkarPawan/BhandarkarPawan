import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../App';
import { QUERY } from '../../constants';

export interface IStyledProps {
  fixed?: boolean;
  variant?: String;
}

export interface IProps {
  refId: String;
  children?: React.ReactNode;
  delegated?: any;
  variant?: String;
}

const NavLink: React.FC<IProps> = (props) => {
  const fixed = useContext(AppContext);
  const variant = props.variant || 'start';

  const scrollToSection = () => {
    const section = document.getElementById(`${props.refId}`);
    section?.scrollIntoView();
  };

  return (
    <Wrapper
      fixed={fixed}
      variant={variant}
      {...props.delegated}
      onClick={scrollToSection}
    >
      {props.children}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  ${(props: IStyledProps) =>
    props.fixed &&
    `
      text-transform: lowercase;
      font-size: calc(1rem * 24 / 18);

      @media ${QUERY.phoneAndDown}{
        padding: 16px 0px;
        display: ${props.variant === 'start' ? 'none' : 'flex'};
        justify-content: center;
        align-items: center;
    }
  `}
`;

export default NavLink;
