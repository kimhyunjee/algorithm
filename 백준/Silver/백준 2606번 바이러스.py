def dfs(x, y):
    global count
    if apartment[x][y] == 0:
        return
    apartment[x][y] = 0
    count += 1
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if nx >= N or nx < 0 or ny >= N or ny < 0:
            continue
        dfs(nx, ny)

N = int(input())
apartment = []
for _ in range(N):
    apartment.append(list(map(int, input().split(''))))

dx = [0, 1, 0, -1]
dy = [1, 0, -1, 0]
result = []

for x in range(N):
    for y in range(N):
        if apartment[x][y] == 1:
            count = 0
            dfs(x, y)
            result.append(count)

result.sort()
print(len(result))
for i in result:
    print(i)
