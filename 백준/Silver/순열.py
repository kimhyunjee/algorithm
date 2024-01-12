# 리트코드 46번. Permutations
# 서로 다른 정수를 입력받아 가능한 모든 수열을 리턴하는 간단한 순열 문제

class Solution:
    def permute(self, nums):
        results = []
        prev_elements = []

        def dfs(elements):
            # 리프노드일때
            if len(elements) == 0:
                results.append(prev_elements[:])

            # 순열 생성 재귀 호출
            for e in elements:
                next_elements = elements[:]
                next_elements.remove(e)
                prev_elements.append(e)
                dfs(next_elements)
                prev_elements.pop()


        dfs(nums)
        return results
