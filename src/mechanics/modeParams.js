export const modeParams = {
    easy: {
      '+': {
        num1range: [2, 99],
        num2range: [2, 99]
      },
      '-': {
        num1range: [2, 99],
        num2range: [2, 99],
        allowNegative: false
      },
      'x': {
        num1range: [2, 12],
        num2range: [2, 12]
      }
    },

    medium: {
      '+': { 
        num1range: [2, 99],
        num2range: [2, 99]
      },
      '-': {
        num1range: [2, 99],
        num2range: [2, 99],
        allowNegative: true
      },
      'x': {
        num1range: [2, 12],
        num2range: [2, 99]
      }
    },

    hard: {
      '+': {
        num1range: [2, 200],
        num2range: [2, 200],
      },
      '-': {
        num1range: [2, 200],
        num2range: [2, 200],
        allowNegative: true
      },
      'x': {
        num1range: [2, 99],
        num2range: [2, 99]
      }
    }
  }