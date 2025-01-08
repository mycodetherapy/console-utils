#!/usr/bin/env node

import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import dayjs from 'dayjs';

yargs(hideBin(process.argv))
  .command(
    'current',
    'Получить текущую дату и время',
    (yargs) => {
      return yargs
        .option('year', {
          alias: 'y',
          type: 'boolean',
          description: 'Получить текущий год',
        })
        .option('month', {
          alias: 'm',
          type: 'boolean',
          description: 'Получить текущий месяц',
        })
        .option('date', {
          alias: 'd',
          type: 'boolean',
          description: 'Получить текущий день',
        });
    },
    (argv) => {
      const now = dayjs();
      switch (true) {
        case argv.year:
          console.log(`Текущий год: ${now.year()}`);
          break;
        case argv.month:
          console.log(`Текущий месяц: ${now.month() + 1}`);
          break;
        case argv.date:
          console.log(`Текущий день: ${now.date()}`);
          break;
        default:
          console.log(`Текущая дата и время (ISO): ${now.toISOString()}`);
      }
    }
  )
  .command(
    'add',
    'Добавить к текущей дате',
    (yargs) => {
      return yargs
        .option('day', {
          alias: 'd',
          type: 'number',
          description: 'Добавить дни',
        })
        .option('month', {
          alias: 'm',
          type: 'number',
          description: 'Добавить месяцы',
        })
        .option('year', {
          alias: 'y',
          type: 'number',
          description: 'Добавить годы',
        });
    },
    (argv) => {
      let result = dayjs();
      switch (true) {
        case argv.day:
          result = result.add(argv.day, 'day');
          break;
        case argv.month:
          result = result.add(argv.month, 'month');
          break;
        case argv.yea:
          result = result.add(argv.year, 'year');
          break;
      }
      console.log(`Дата в будущем (ISO): ${result.toISOString()}`);
    }
  )
  .command(
    'sub',
    'Вычесть из текущей даты',
    (yargs) => {
      return yargs
        .option('day', {
          alias: 'd',
          type: 'number',
          description: 'Вычесть дни',
        })
        .option('month', {
          alias: 'm',
          type: 'number',
          description: 'Вычесть месяцы',
        })
        .option('year', {
          alias: 'y',
          type: 'number',
          description: 'Вычесть годы',
        });
    },
    (argv) => {
      let result = dayjs();
      switch (true) {
        case argv.day:
          result = result.subtract(argv.day, 'day');
          break;
        case argv.month:
          result = result.subtract(argv.month, 'month');
          break;
        case argv.year:
          result = result.subtract(argv.year, 'year');
          break;
      }
      console.log(`Дата в прошлом (ISO): ${result.toISOString()}`);
    }
  )
  .help()
  .alias('help', 'h')
  .demandCommand(1, 'Вы должны указать хотя бы одну команду')
  .parse();
