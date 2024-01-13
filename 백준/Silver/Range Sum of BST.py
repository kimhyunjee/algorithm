# 스택을 활용한 탐색을 통한 풀이
def add(root: Optional[TreeNode], low: int, high: int) -> int:
    stack = [root]
    added = 0

    while stack:
        node = stack.pop()

        if node is None:
            continue

        if node.val < low:
            stack.append(node.right)
            continue

        if node.val > high:
            stack.append(node.left)
            continue

        # low <= node.val <= high

        added += node.val
        stack.append(node.left)
        stack.append(node.right)

    return added
