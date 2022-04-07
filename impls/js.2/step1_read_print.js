import * as readline from 'node:readline/promises';

import * as reader from './reader.js'
import * as printer from './printer.js'

main()

async function main() {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
    while (true) {
        const line = await rl.question('user> ')
        if (line === 'exit') break
        const output = rep(line)
        console.log(output)
    }
    rl.close()
}

function rep(line) {
    const a = READ(line)
    const b = EVAL(a)
    const c = PRINT(b)
    return c
}

function READ(line) {
    return reader.read_str(line)
}

function EVAL(line) {
    return line
}

function PRINT(result) {
    return printer.pr_str(result)
}



