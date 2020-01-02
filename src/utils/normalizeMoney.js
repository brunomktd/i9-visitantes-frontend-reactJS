const normalizeMoney = data =>
  data === undefined
    ? ''
    : parseInt(data, 10).toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
      });

export default normalizeMoney;
