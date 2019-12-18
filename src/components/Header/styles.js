import styled from 'styled-components';

export const Menu = styled.div`
  max-height: 75px;
  background: #42bea5;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  color: #fff;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;

  h1 {
    margin: 10px 50px;
    padding: 10px;
    border: 1px solid #fff;
  }

  ul {
    font-size: 16px;
    width: 300px;
    margin-right: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    list-style: none;

    a {
      color: #fff;
      margin: 0 10px;
      text-decoration: none;
    }
  }
`;
