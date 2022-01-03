import styled from 'styled-components';

export const Container = styled.div`
  width: 320px;
  height: auto;
  border: 1px solid rgb(158 146 163);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 3px;
`;

export const Header = styled.div`
  flex: 1;
`;

export const Footer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  text-align: center;
`;
