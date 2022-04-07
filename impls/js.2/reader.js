class Reader {
    constructor(tokens) {
        this.tokens = tokens
        this.position = 0
    }

    next() {
        return this.tokens[this.position++]
    }

    peek() {
        return this.tokens[this.position]
    }
}

export function read_str(line) {
    const tokens = tokenize(line)
    const reader = new Reader(tokens)
    return read_form(reader)
}

function tokenize(line) {
    return [...line.matchAll(/[\s,]*(~@|[\[\]{}()'`~^@]|"(?:\\.|[^\\"])*"?|;.*|[^\s\[\]{}('"`,;)]*)\s*/g)]
        .map(match => match[1])
}

function read_form(reader) {
    const token = reader.next();
    if (token === '(') {
        return read_list(reader)
    } else {
        return read_atom(token)
    }
}

function read_list(reader) {
    const mal_list = []
    let token = reader.peek()
    while (token !== ')') {
        const mal_type = read_form(reader)
        mal_list.push(mal_type)
        token = reader.peek()
    }
    reader.next()
    return { type: 'list', value: mal_list }
}

function read_atom(token) {
    if (/^-?\d+$/.test(token)) {
        return { type: 'integer', value: parseInt(token) }
    } else if (token === 'true') {
        return { type: 'boolean', value: true }
    } else if (token === 'false') {
        return { type: 'boolean', value: false }
    } else if (token === 'nil') {
        return { type: 'nil' }
    } else if (token.startsWith('"')) { // TODO: what happens if the string is not closed?
        return { type: 'string', value: token.slice(1, -1) }
    } else {
        return { type: 'symbol', value: token }
    }
    // TODO: add support for other mal types
}

