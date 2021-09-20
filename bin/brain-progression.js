#!/usr/bin/env node

import { condition, question, correctAnswer } from '../src/games/progression.js';
import newGame from '../src/index.js';

newGame(condition, question, correctAnswer);
