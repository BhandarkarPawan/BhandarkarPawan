import styled from 'styled-components';

export interface IProps {
  children?: React.ReactNode;
  delegated?: any;
}

const DownloadLink: React.FC<IProps> = (props) => {
  return <Wrapper {...props.delegated}>{props.children}</Wrapper>;
};

const Wrapper = styled.div``;

export default DownloadLink;
