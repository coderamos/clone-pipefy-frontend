import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  /* height: 100%; */
  flex: 0 0 320px;
  opacity: ${props => (props.done ? 0.5 : 1)};

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.06);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;
    button {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: #ff5555;
      border: 0;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 30px;
  }
`;

export const Title = styled.h2`
  color: #282a36;
  font-weight: 500;
  font-size: 16px;
  padding: 0 10px;
`;
