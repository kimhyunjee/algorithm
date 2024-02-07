def twoSum(numbers: List[int], target: int) -> List[int]:
    x, y = 0, len(numbers)-1
    while x < y:
        sum = numbers[x]+numbers[y]

        if sum < target:
            x += 1
        elif sum > target:
            y -= 1
        else:
            return [x + 1, y + 1]
