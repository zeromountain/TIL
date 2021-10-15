# 이진트리
- 각각의 노드가 최대 두개의 자식 노드를 가지는 트리 자료 구조
  - 검색 정렬: 이진 탐색 트리와 이진 힙 구현에 사용
  - 허프만 코딩: 연관 분기 구조를 위한 데이터 표현에 활용
- 이진 트리의 종류
  - 포화 이진 트리
  - 완전 이진 트리
  - 정 이진 트리
  - 편향 이진 트리
  - 균형 이진 트리
## 포화 이진 트리(Perfect Binary Tree)
- 모든 레벨의 노드가 가득 채워져 있는 트리 구조
  - Leaf 노드를 제외한 모든 자식은 2개의 노드를 가짐
  - 노드의 개수: n = 2<sup>height-1</sup>

![](https://sites.google.com/site/2019algorithm3/_/rsrc/1574958571729/gwaje-gong-yu/gwaje3binarytree/%ED%8F%AC%ED%99%94%EC%9D%B4%EC%A7%84%ED%8A%B8%EB%A6%AC.PNG?height=267&width=400)

## 완전 이진 트리(Complete Binary Tree)
- 마지막 레벨 전까지 노드가 가득 채워져 있고, 마지막 레벨은 왼쪽부터 순차적으로 채워져 있는 트리 구조
  - 배열을 사용해 효율적인 표현이 가능
  - 노드의 개수: n < 2<sup>height - 1</sup>

![](https://sites.google.com/site/2019algorithm3/_/rsrc/1574958984868/gwaje-gong-yu/gwaje3binarytree/%EC%99%84%EC%A0%84%EC%9D%B4%EC%A7%84.PNG?height=137&width=400)

## 정 이진 트리(Full Binary Tree)
- 모든 노드가 0개 또는 2개의 자식 노드만 갖는 트리 구조
  - proper 또는 plane 이진 트리라고도 불림
  - 노드의 개수: n <= 2<sup>height - 1</sup>

![](https://blog.kakaocdn.net/dn/mKJ7V/btqwonwKP4O/PcoqyO4ByltV7YPok5Rr71/img.png)

## 편향 이진 트리(Skewed Binary Tree)
- 왼쪽 혹은 오른쪽으로 편향되게 치우쳐 있는 트리 구조
  - 각각의 높이에 하나의 노드만 존재
  - 노드의 개수: n

![](https://t1.daumcdn.net/cfile/tistory/99AA8E3B5B33A78109)

## 균형 이진 트리(Balanced Binary Tree)
- 삽입과 삭제가 이뤄질 때, 왼쪽 서브 트리와 오른쪽 서브 트리의 높이 차를 1이하로 맞추는 이진 탐색 트리 구조
  - 서브 트리 높이 차이가 항상 1이하로 유지
  - 균형 트리 종류: AVL트리, Red-Black 트리, B트리, B+트리, B* 트리

![](https://www.notion.so/0766c78137bb45318873b4ee0634a4cc#19a454be5a6f41dfbccfb8574a7e454f)

## 이진 트리 순회
- 각각의 노드가 최대 두 개의 자식 노드를 가지는 트리 자료 구조를 순회하는 방법
### 이진 트리 순회 구현

```js
// Node(): value와 left, right node 저장을 위한 생성자
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// BinaryTree(): 시작 노드인 root를 저장하기 위한 생성자
function BinaryTree() {
  this.root = null;
}

// _insertNode(): 재귀로 트리를 순회하며 노드를 추가 (내부 사용)
BinaryTree.prototype._insertNode = function (node, value) {
  // → private 데이터 캡슐화
  if (node === null) {
    node = new Node(value);
  } else if (value < node.value) {
    node.left = this._insertNode(node.left, value); // 왼쪽 트리를 탐색하고 value가 없으면 새로운 루트 노드를 추가
  } else if (value >= node.value) {
    node.right = this._insertNode(node.right, value); // 오른쪽 트리를 탐색하고 value가 없으면 새로운 루트 노드를 추가
  }
  return node;
};

// insert(): 노드 추가
BinaryTree.prototype.insert = function (value) {
  this.root = this._insertNode(this.root, value);
};

// _preOrderTraverseNode(): 재귀로 트리를 순회하며 전위 순회 (내부 사용)
BinaryTree.prototype._preOrderTraverseNode = function (node, callback) {
  if (node === null) return;

  callback(node);
  this._preOrderTraverseNode(node.left, callback);
  this._preOrderTraverseNode(node.right, callback);
};

// preOrderTraverse(): 전위 순회하며 노드 출력
BinaryTree.prototype.preOrderTraverse = function (callback) {
  this._preOrderTraverseNode(this.root, callback);
};

// _inOrderTraverseNode(): 재귀로 트리를 순회하며 중위 순회(내부 사용)
BinaryTree.prototype._inOrderTraverseNode = function (node, callback) {
  if (node === null) return;

  this._inOrderTraverseNode(node.left, callback);
  callback(node);
  this._inOrderTraverseNode(node.right, callback);
};

// inOrderTraverse(): 중위 순회하며 노드 출력
BinaryTree.prototype.inOrderTraverse = function (callback) {
  this._inOrderTraverseNode(this.root, callback);
};

// _postOrderTraverseNode():
BinaryTree.prototype._postOrderTraverseNode = function (node, callback) {
  if (node === null) return;

  this._postOrderTraverseNode(node.left, callback);
  this._postOrderTraverseNode(node.right, callback);
  callback(node);
};

// postOrderTraverse():
BinaryTree.prototype.postOrderTraverse = function (callback) {
  this._postOrderTraverseNode(this.root, callback);
};

function Queue(array) {
  this.array = array ? array : [];
}

Queue.prototype.isEmpty = function () {
  return this.array.length === 0;
};

Queue.prototype.enqueue = function (element) {
  return this.array.push(element);
};

Queue.prototype.dequeue = function () {
  return this.array.shift();
};

// levelOrderTraverse(): 층별 순회하며 노드 출력
BinaryTree.prototype.levelOrderTraverse = function (callback) {
  let q = new Queue();
  let node;

  q.enqueue(this.root);

  while (!q.isEmpty()) {
    node = q.dequeue();
    callback(node);
    if (node.left !== null) q.enqueue(node.left);
    if (node.right !== null) q.enqueue(node.right);
  }
};

let tree = new BinaryTree();

tree.insert('F');
tree.insert('B');
tree.insert('A');
tree.insert('D');
tree.insert('C');
tree.insert('E');
tree.insert('G');
tree.insert('I');
tree.insert('H');

console.log(tree);

function printNode(node) {
  process.stdout.write(`${node.value} → `);
}

console.log('******* 전위 순회 *******');
tree.preOrderTraverse(printNode);
console.log('end');

console.log('******* 중위 순회 *******');
tree.inOrderTraverse(printNode);
console.log('end');

console.log('******* 후위 순회 *******');
tree.postOrderTraverse(printNode);
console.log('end');

console.log('******* 층별 순회 *******');
tree.levelOrderTraverse(printNode);
console.log('end');
```

- 이진트리의 노드는 left와 right 속성을 가지며, 자식 노드를 가리킴
- 전위순회: Node - Left - Right
- 중위순회: Left - Node - Right
- 후위순회: Left - Right - Node
- 층별순회: 1 level(root) - 2 level - ... - n level

## 이진 탐색 트리
- 현재 노드를 기준으로 왼쪽에는 작은 값, 오른쪽은 큰 값으로 정렬해 놓는 이진 트리 기반 자료 구조

### 이진 탐색 트리 구현하기

```js
// Node(): value와 left, right node 저장을 위한 생성자
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// BinarySearchTree(): 시작 노드인 root를 저장하기 위한 생성자
function BinarySearchTree() {
  this.root = null;
}

// _inOrderTraverseNode():재귀로 트리를 순회하며 중위 순회
BinarySearchTree.prototype._inOrderTraverseNode = function (node, callback) {
  if (node === null) return;
  this._inOrderTraverseNode(node.left, callback);
  callback(node);
  this._inOrderTraverseNode(node.right, callback);
};

// inOrderTraverse(): 중위 순회하며 노드 출력
BinarySearchTree.prototype.inOrderTraverse = function (callback) {
  this._inOrderTraverseNode(this.root, callback);
  console.log('end');
};

// _insertNode(): 재귀로 트리를 순회하며 노드 추가 (내부 사용)
BinarySearchTree.prototype._insertNode = function (node, value) {
  if (node === null) {
    node = new Node(value);
  } else if (value < node.value) {
    node.left = this._insertNode(node.left, value);
  } else if (value >= node.value) {
    node.right = this._insertNode(node.right, value);
  }
  return node;
};

// insert(): 노드 추가
BinarySearchTree.prototype.insert = function (value) {
  this.root = this._insertNode(this.root, value);
};

// minNode(): 반복문으로 트리를 순회하며 최솟값 노드 탐색
BinarySearchTree.prototype._minNode = function (node) {
  if (node === null) return null;

  while (node && node.left !== null) {
    node = node.left;
  }

  return node.value;
};
// maxNode(): 반복문으로 트리를 순회하며 최댓값 노드 탐색
BinarySearchTree.prototype._maxNode = function (node) {
  if (node === null) return null;

  while (node && node.right !== null) {
    node = node.right;
  }
  return node.value;
};

// min(): 최솟값 노드 탐색
BinarySearchTree.prototype.min = function () {
  return this._minNode(this.root);
};

// max(): 최댓값 노드 탐색
BinarySearchTree.prototype.max = function () {
  return this._maxNode(this.root);
};

// _searchNode(): 재귀로 트리를 순회하며 값을 만족하는 노드 탐색
BinarySearchTree.prototype._searchNode = function (node, value) {
  if (node === null) return false;

  if (node.value === value) {
    return true;
  } else if (node.value > value) {
    return this._searchNode(node.left, value);
  } else if (node.value < value) {
    return this._searchNode(node.right, value);
  }
};

// search(): value 노드 탐색
BinarySearchTree.prototype.search = function (value) {
  return this._searchNode(this.root, value);
};

// _findMinNode(): 반복문으로 트리를 순회하며 최솟값을 보유한 노드 탐색
BinarySearchTree.prototype._findMinNode = function (node) {
  while (node && node.left !== null) {
    node = node.left;
  }
  return node;
};

// _removeNode(): 재귀로 트리를 순회하며 값을 만족하는 노드를 찾고 삭제
BinarySearchTree.prototype._removeNode = function (node, value) {
  if (node === null) {
    return null;
  }
  if (node.value === value) {
    // case1: leaf node
    if (node.left === null && node.right === null) {
      node = null;
    }
    // case 2: 1 child node
    else if (node.left === null) {
      node = node.right;
    } else if (node.right === null) {
      node = node.left;
    }
    // case 3: 2 child node
    else {
      let aux = this._findMinNode(node.right); // → 최솟값으로 찾은 노드는 삭제된 노드의 왼쪽 노드보다는 크고 오른쪽 노드보다는 작기 때문에 root 노드로서의 조건을 만족
      node.value = aux.value;
      node.right = this._removeNode(node.right, aux.value);
    }
  } else if (node.value > value) {
    node.left = this._removeNode(node.left, value);
  } else if (node.value < value) {
    node.right = this._removeNode(node.right, value);
  }
  return node;
};

// remove(): 노드 삭제
BinarySearchTree.prototype.remove = function (value) {
  root = this._removeNode(this.root, value);
};

// make & insert tree
let tree = new BinarySearchTree();

tree.insert('F');
tree.insert('B');
tree.insert('A');
tree.insert('D');
tree.insert('C');
tree.insert('E');
tree.insert('G');
tree.insert('I');
tree.insert('H');

console.log(tree.root);

function printNode(node) {
  process.stdout.write(`${node.value} → `);
}

tree.inOrderTraverse(printNode);

console.log(tree.min());
console.log(tree.max());

console.log(tree.search('J') ? 'Found J' : 'Not Found J');
console.log(tree.search('I') ? 'Found I' : 'Not Found I');

tree.inOrderTraverse(printNode);
tree.remove('H');
tree.inOrderTraverse(printNode);
tree.remove('D');
tree.inOrderTraverse(printNode);
tree.remove('F');
tree.inOrderTraverse(printNode);

console.log(tree.root);
```