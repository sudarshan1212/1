
def find_second_and_fourth_greatest(numbers):
    if len(numbers) < 4:
        return "Error: List length should be at least 4."    
    sorted_numbers = sorted(numbers, reverse=True)
    second_greatest = sorted_numbers[1]
    fourth_greatest = sorted_numbers[3]    
    return second_greatest, fourth_greatest
numbers_list = [10, 5, 20, 15, 30, 25]
result = find_second_and_fourth_greatest(numbers_list)
print("Second greatest and fourth greatest numbers:", result)