import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../App';
import SocialLink from '../SocialLink';

export interface IStyledProps {
  fixed?: boolean;
}
export interface IProps {
  children?: React.ReactNode;
  variant?: String;
  delegated?: any;
}

// TODO: Read from JSON
const SOCIALS = [
  {
    name: 'Github',
    url: 'http://github.com/BhandarkarPawan',
    image: 'Github.svg'
  },
  {
    name: 'Twittter',
    url: 'http://twitter.com/BhandarkarPawan',
    image: 'Twitter.svg'
  },
  {
    name: 'LinkedIn',
    url: 'http://linkedin.com/in/bhandarkar',
    image: 'LinkedIn.svg'
  }
];

const SocialLinks: React.FC<IProps> = (props) => {
  const fixed = useContext(AppContext);

  return (
    <Wrapper fixed={fixed}>
      {SOCIALS.map((social, i) => (
        <ListItem key={i}>
          <SocialLink social={social} variant={props.variant} />
        </ListItem>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  ${(props: IStyledProps) =>
    props.fixed &&
    `
    padding: 0;
    display: flex;
    gap: 48px;
  `}
`;

const ListItem = styled.li`
  list-style: none;
`;

export default SocialLinks;
