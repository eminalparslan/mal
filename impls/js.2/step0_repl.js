const readline = require('readline/promises')


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
    const a = read(line)
    const b = eval(a)
    const c = print(b)
    return c
}

function read(line) {

    return line
}

function eval(line) {
    
    return line
}

function print(result) {

    return result
}



