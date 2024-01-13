# 리트코드 700
#BST에서 노드의 값이 val과 같은 노드를 찾고 해당 노드의 하위 트리를 반환하는 코드를 작성. 그러한 노드가 존재하지 않으면 null을 반환 합니다.
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def searchBST(self, root, val):

        # 루트 노드? 첫째 노드가 비어있다면(자식노드가 없다면?) 그냥 그대로 리턴
        while ( root is not None and root.val != val):   # 현재 노드가 받은 val값과 같지 않을때
            if root.val< val:   # val보다 값이
                # 작으면 더 큰 걸 찾아야함 / 오른쪽 값이 더 큼
                root = root.right   # 루트에 오른쪽자식노드값을 넣어줌
            if root.val > val:  # val보다 값이 작으면 더 작은 값을 찾아야함/ 왼쪽 자식노드 값이 더 작음
                root = root.left    # 루트에 왼쪽자식노드값을 넣어줌

        return root # val값과 같은 root 와 하위노드
