function calculator() {
  const add = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
  };

  const subtraction = (firstNumber, secondNumber) => {
    return firstNumber - secondNumber;
  };

  const multiplication = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
  };

  const division = (firstNumber, secondNumber) => {
    if (secondNumber === 0) {
      throw new Error("Cannot divide by zero");
    }

    return firstNumber / secondNumber;
  };

  return { add, subtraction, multiplication, division };
}

export default calculator();