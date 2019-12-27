import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 20px;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .representative {
    width: 2em;
    height: 2em;
    background: #7159c1;
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    margin-bottom: 10px;
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
    font-size: 50px;
    color: #7159c1;
  }

  span {
    color: silver;
    font-size: 20px;
  }
`;
