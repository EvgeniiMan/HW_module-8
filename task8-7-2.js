const calculate = function (a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        break;

        case '-':
            return a - b;
        break;

        case '*':
            return a * b;
        break;

        case '/':
            if (b == 0) {
                return "Деление на ноль";
            }

            return a / b;
        break;

        default:
            return `Калькулятор не знает оператора ${operator}!`;
    }
}


const obj = {
    a: 3,
    b: 5,
    operator:'*'
}

calculate.apply(obj, [2, 3, '+']);