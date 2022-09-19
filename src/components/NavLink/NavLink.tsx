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

  console.log(variant);
  return (
    <Wrapper variant={variant} onClick={scrollToSection}>
      <Name>{props.children}</Name>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  padding-top: 8px;
  padding-bottom: 8px;
  --border-color: ${(props: IStyledProps) =>
    props.variant === 'start' ? 'white' : 'var(--color-primary)'};

  &:hover {
    cursor: pointer;
  }

  @media ${QUERY.phoneAndDown} {
    display: ${(props: IStyledProps) =>
      props.variant === 'start' ? 'none' : 'flex'};

    justify-content: center;
  }
`;

const Name = styled.div`
  text-transform: lowercase;
  font-size: calc(1rem * 24 / 18);
  padding-bottom: 4px;
  margin-bottom: -8px;
  transition: transform 200ms ease;

  ${Wrapper}:hover & {
    border-bottom: 4px solid var(--border-color);
    transform: translateY(-10px);
  }

  @media ${QUERY.phoneAndDown} {
    padding: 16px 0px;
    justify-content: center;
  }
`;

export default NavLink;
