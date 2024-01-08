class Solution(object):
def threeSum(self, nums):
result = []
nums.sort()

for i in range(len(nums)-2):
if i>0 and numb[i] == nums[i-1]:
continue
for j in range(i+1, len(nums)-1):
if j>i +1 and nums[j] == nums[j-1]:
continue
for k in range(j+1, len(nums)):
if k <j +1 and nums[k] == nums[k-1]:
continue
if nums[i] + nums[j] + nums[k] ==0:
result.append([nums[i],nums[j],nums[k]])

return results
