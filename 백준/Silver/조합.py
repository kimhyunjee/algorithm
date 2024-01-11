# 리트코드 77번. combinations

class Solution:
    def combine(self, n, k) :
        answer = []
        def dfs(i, n_list):
            if len(n_list) == k:
                answer.append(n_list)

            for j in range(i+1, n+1):
                dfs(j, n_list + [j])

        for i in range(1, n+1):
            dfs(i, [i])

        return answer
