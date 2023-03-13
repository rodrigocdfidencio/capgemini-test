function isValidSequence(sequence) {
  sequence = sequence.letters;

  const columns = sequence[0].length;
  const lines = sequence.length;

  if (lines != columns)
    return 'Número de linhas diferente do número de colunas, matriz deve ser NXN';

  for (let i = 0; i < lines; i++) {
    if (sequence[i].length !== lines)
      return `A posição ${i} do array contém quantidade diferente de caracteres, a matriz deve ser NXN`;
  }

  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i].indexOf(' ') >= 0)
      return 'Existem espaços vazios na matriz';
  }

  function validateSequence(sequence) {
    let counter = 0;

    for (let i = 0; i < sequence.length; i++) {
      if (
        sequence[i].indexOf('DDDD') != -1 ||
        sequence[i].indexOf('UUUU') != -1 ||
        sequence[i].indexOf('HHHH') != -1 ||
        sequence[i].indexOf('BBBB') != -1
      ) {
        counter++;
      }
    }

    return counter;
  }

  function convertLinesToColumns(sequence, lines, columns) {
    let newSequence = [];
    for (let i = 0; i < lines; i++) {
      let newArray = [];
      for (let j = 0; j < columns; j++) {
        newArray.push(sequence[j][i]);
      }
      newSequence.push(newArray.toString().replaceAll(',', ''));
    }
    return newSequence;
  }

  function convertLinesToDiagonalAsc(sequence, lines, columns) {
    let newSequence = [];
    for (let z = 0; z < lines + columns - 1; z++) {
      let newArray = [];
      for (let i = 0; i < lines; i++) {
        for (let j = 0; j < sequence[i].length; j++) {
          if (i + j === z) {
            newArray.push(sequence[j][i]);
          }
        }
      }
      if (newArray.length != 0) {
        newSequence.push(newArray.toString().replaceAll(',', ''));
      }
    }
    return newSequence;
  }

  function convertLinesToDiagonalDesc(sequence, lines, columns) {
    let invertedSequence = sequence.slice(0).reverse();
    return convertLinesToDiagonalAsc(invertedSequence, lines, columns);
  }

  const normalSequence = sequence;
  const linesToColumns = convertLinesToColumns(sequence, lines, columns);
  const linesToDiagonalAsc = convertLinesToDiagonalAsc(
    sequence,
    lines,
    columns
  );
  const linesToDiagonalDesc = convertLinesToDiagonalDesc(
    sequence,
    lines,
    columns
  );

  const sumOfValues =
    validateSequence(normalSequence) +
      validateSequence(linesToColumns) +
      validateSequence(linesToDiagonalAsc) +
      validateSequence(linesToDiagonalDesc) >=
    2;

  const result = {
    is_valid: sumOfValues,
  };

  return result;
}

export default isValidSequence;
