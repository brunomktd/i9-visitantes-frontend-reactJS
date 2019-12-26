import styled from 'styled-components';

export const Table = styled.table`
  margin-top: 30px;
  width: 100%;
  cursor: pointer;

  text-align: center;

  th,
  td {
    border: 1px solid #eee;

    button#delete {
      height: 30px;
      padding: 3px;
      border: 0;
      background: lightcoral;
      color: #eee;
    }
    button#update {
      height: 30px;
      padding: 3px;
      border: 0;
      background: #42bea5;
      color: #eee;
    }
  }
`;
