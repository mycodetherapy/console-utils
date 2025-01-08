#!/usr/bin/env node

import readline from 'readline';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const startGame = () => {
  const min = 0;
  const max = 10;
  const target = Math.floor(Math.random() * (max - min + 1)) + min;

  console.log(`Загадано число в диапазоне от ${min} до ${max}`);

  const askQuestion = () => {
    rl.question('Введите число: ', (answer) => {
      const userGuess = Number(answer);

      if (isNaN(userGuess)) {
        console.log('Пожалуйста, введите число.');
        askQuestion();
        return;
      }

      if (userGuess < target) {
        console.log('Больше');
        askQuestion();
      } else if (userGuess > target) {
        console.log('Меньше');
        askQuestion();
      } else {
        console.log(`Отгадано число ${target}`);
        rl.close();
      }
    });
  };

  askQuestion();
};

yargs(hideBin(process.argv))
  .command(
    'guess',
    'Начать игру',
    () => {},
    () => startGame()
  )
  .help()
  .alias('help', 'h')
  .parse();
