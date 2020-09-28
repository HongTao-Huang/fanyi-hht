#!/usr/bin/env node

import { Command } from 'commander'
import { translate } from './index'

const program = new Command()

program
  .version('0.0.1')
  .name('htfy')
  .usage('<word>')
  .arguments('<word>')
  .action((word: string) => {
    translate(word)
  })

program.parse(process.argv)
