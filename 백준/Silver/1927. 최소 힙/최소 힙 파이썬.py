# 정렬되지 않은 배열에서 k 번째 큰 요소 추출

def findKth(self,nums):
    heap = list()
    for n in nums:
        heapq.heqppush(heap, -n)

    for _ in range(1,K):
        heapq.heapppop(heap)

    return -heapq.heappop(heap)

# 파이썬의 힙은 최소힙 지원이므로 음수로 저장하여 가장 낮은 수부터 추출
