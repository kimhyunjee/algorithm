n = int(input())
rgb = [0] * n

for i in range(n):
    rgb[i] = list(map(int, input().split()))

for i in range(1, n):  # 1부터 시작:  다음 입력값이 이전 입력값의 최소값을 사용하기때문
    rgb[i][0] = min(rgb[i - 1][1], rgb[i - 1][2]) + rgb[i][0]
    rgb[i][1] = min(rgb[i - 1][0], rgb[i - 1][2]) + rgb[i][1]
    rgb[i][2] = min(rgb[i - 1][0], rgb[i - 1][1]) + rgb[i][2]

print(min(rgb[n - 1][0], rgb[n - 1][1], rgb[n - 1][2]))