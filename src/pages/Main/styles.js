import styled from 'styled-components';

export const Title = styled.h1`
  color: #222;
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

// export const Table = styled.table`
//   margin-top: 30px;
//   width: 100%;
//   cursor: pointer;

//   text-align: center;

//   th,
//   td {
//     border: 1px solid #eee;

//     button#delete {
//       height: 30px;
//       padding: 3px;
//       border: 0;
//       background: lightcoral;
//       color: #eee;
//     }
//     button#update {
//       height: 30px;
//       padding: 3px;
//       border: 0;
//       background: #42bea5;
//       color: #eee;
//     }
//   }
// `;
