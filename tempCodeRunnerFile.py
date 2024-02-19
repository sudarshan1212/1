def transform_string(input_string):
    if len(input_string) % 2 != 0: 
        mid_index = len(input_string) // 2
        first_half = input_string[:mid_index].lower()
        second_half = input_string[mid_index:].upper()
        transformed_string = first_half + second_half
        return transformed_string
    else:
        return input_string
strings = ["oriJenBeliret", "orionmeo"]
for string in strings:
    transformed_string = transform_string(string)
    print(f"Original string: {string} - Transformed string: {transformed_string}")