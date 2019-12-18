import styled from 'styled-components';

export const Title = styled.h1`
  color: #222;
`;

export const Container = styled.div`
  max-width: 800px;
  height: 100%;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  label {
    display: flex;
    flex-direction: column;

    margin: 10px;
    color: #7159c1;
    font-size: 12px;
  }

  input {
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 5px;
    font-size: 14px;
  }
`;

export const SubmitButton = styled.button`
  height: 50px;
  background: #7159c1;
  color: #fff;
  font-size: 20px;
  border: 0;
  padding: 0 15px;
  margin: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Table = styled.table`
  border: 1px solid #f39200;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  ::col {
    border: 1px solid #222;
    text-align: inherit;
    padding: 0.75rem;
  }

  td {
    border: 1px solid #b66;
    padding: 0.75rem;
    vertical-align: top;
  }
`;

export const List = styled.ul``;
