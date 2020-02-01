S = "abppplee"
D = ["able", "ale", "apple", "bale", "kangaroo"]

def get_positions(big_word, small_word):
    aux = []
    small_word = list(small_word)
    positions_to_skip = []
    for char in small_word:
        _continue_to_next_char = True
        position = -1
        while _continue_to_next_char:
            try:
                position = big_word.index(char, position + 1)
                if position not in positions_to_skip:
                    _continue_to_next_char = False
                positions_to_skip.append(position)
            except ValueError:
                _continue_to_next_char = False

        aux.append(position)

    return aux

def is_sequence(_list):
    for a in range(0,len(_list) - 1):
        if _list[a] > _list[a+1]:
            return False
    return True

longest = ''
for word in D:
    postions_found = get_positions(S, word)
    if is_sequence(postions_found) is True and len(longest) < len(word):
        longest = word

print(longest)
