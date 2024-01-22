# 시간 복잡도: O(n)
# 공간 복잡도: O(n) -> O(1)
# nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
# dp = [-2, 1, -2, 4, 3, 5, 6, -3, 4] 그동안 각 숫자를 포함한 부분 배열합 저장

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        dp=[0] * len(nums) # dp배열 초기값은 중요치 않으니 그냥 0
        dp[0] = nums[0] # dp배열의 첫번째 인자는 nums의 첫번째 인자
        for i in range(1, len(nums)): # 0은 위에 들어갔으니 1부터 시작
            dp[i] = max(nums[i], dp(i-1)+nums[i]) # dp[i]구하는 방법 : nums[i]로 새로 시작하거나
# 그 앞에거(현재까지의 부분 배열합) 랑 현재 값 더하는 방법 둘 중 하나 중 큰 값
        return max(dp)
