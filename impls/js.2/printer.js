export function pr_str(mal_type) {
    switch (mal_type.type) {
        case 'integer':
            return mal_type.value.toString()
        case 'boolean':
            return mal_type.value.toString()
        case 'nil':
            return 'nil'
        case 'string':
            return '"' + mal_type.value + '"'
        case 'symbol':
            return mal_type.value
        case 'list':
            const str_list = []
            for (const item of mal_type.value) {
                str_list.push(pr_str(item))
            }
            return '(' + str_list.join(' ') + ')'
    }
}

