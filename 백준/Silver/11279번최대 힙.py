#최대 힙


input=sys.stdin.readline    #시간초과 방지

n=int(input())
heap=[] #힙을 저장하기 위한 리스트

for i in range(n):  #처음 주어지는 정수 값만큼 반복
    x=int(input())  # 정수 x값 받아옴
    if (x==0):  # x=0일 경우 가장 작은 값을 출력해야 한다. 리스트에 요소가 없을 경우 에러가 나므로
        if len(heap)==0:    # len함수로 길이가 0일 때를 확인하여 0출력
            print(0)
        else:
            print((-1)*heapq.heappop(heap))  #곱했던 -1 때문에 다시 -1을 곱해 출력
    else:
        heapq.heappush(heap, (-1)*x)
        # 넣는 값에 -1을 곱해  heap에 push해주면 가장 큰 값이 음수가 되어 가장 작은 값이 됨
        # 역순으로 list에 들어감 결국 -를 제외하면 절댓값이 큰 순서대로 정렬됨 ex) [ -5,-4,-3,-2,-1 ]
