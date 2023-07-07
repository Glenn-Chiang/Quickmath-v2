import randomSelect from '../utility/randomSelect'
import randomNum from "../utility/randomNum";
import { modeParams } from './modeParams';

export default function generateProblem(difficulty) {
    const operators = ['+', '-', 'x'];
    const operator = randomSelect(operators);
    const { num1range, num2range, allowNegative } = modeParams[difficulty][operator];
    let num1 = randomNum(num1range);
    let num2 = randomNum(num2range);
    
    if (!allowNegative && operator === '-') {
        num1 = Math.max(num1, num2);
        num2 = Math.min(num1, num2);
    }

    let solution;
    switch (operator) {
        case '+':
            solution = num1 + num2;
            break;
        case '-':
            solution = num1 - num2;
            break;
        case 'x':
            solution = num1 * num2;
    }

    return { num1, num2, operator, solution }
}