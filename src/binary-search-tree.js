const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor () {
    this.rootNode = null;
  }

  root() {
    return this.rootNode
  }

  add(data) {
    const newNode = new Node(data)

    if(!this.rootNode) {
      this.rootNode = newNode;
      return;
    }
    let NodeCur = this.rootNode;
    while(NodeCur) {
      if(newNode.data < NodeCur.data) {
        if(!NodeCur.left) {
          NodeCur.left = newNode;
          return;
        }
        NodeCur = NodeCur.left;

      } else {
        if(!NodeCur.right) {
          NodeCur.right = newNode;
          return;
        }
        NodeCur = NodeCur.right;
      }
    }
  }

  has(data) {
    return search(this.rootNode, data);

    function search(node, info) {
      if (!node) return false;

      if (node.data === info) return true;

      return data < node.data ?
          search(node.left, info) :
          search(node.right, info)
    }
  }

  find(data) {
    return find(this.rootNode, data);

    function find(node, info) {
      if (!node) return null;

      if (node.data === info) return node;

      return data < node.data ?
          find(node.left, info) :
          find(node.right, info)
    }
  }


  remove(data) {
    if(this.has(data)) {

      let main = null;
      let currentNode = this.rootNode;
      while(currentNode.data !== data) {
        if(currentNode.data > data) {
          main = currentNode;
          currentNode = currentNode.left;
          
        } else {

          main = currentNode;
          currentNode = currentNode.right;

        }
      }

      if(currentNode.left === null && currentNode.right == null) {
        if(main.data > currentNode.data) {
          main.left = null;
        } else {
          main.right = null;
        }
      } else if(currentNode.left === null) {
        if(main.data > currentNode.data) {
          main.left = currentNode.right;
        } else {
          main.right = currentNode.right;
        }
      } else if(currentNode.right === null) {
        if(main.data > currentNode.data) {
          main.left = currentNode.left;
        } else {
          main.right = currentNode.left;
        }
      } else {
        let endRoots = currentNode;
        let endRoot = currentNode.left;

        while(endRoot.right) {
          endRoots = endRoot;
          endRoot = endRoot.right;
        }

          currentNode.data = endRoot.data;
        
        if(endRoot.left) {
          endRoots.right = endRoot.left;
        } else {
          endRoots.right = null;
        }
      }
    } else {

      return false;
    
    }
  
  }

  min() {
    let next = this.rootNode;
    if (!next) {
      return null;
    }
    while (next.left) {
      next = next.left;
    } return next.data;
  }

  max() {
    let next = this.rootNode;
    if (!next) {
      return null;
    }
    while (next.right) {
      next = next.right;
    } return next.data;
  }
}

module.exports = {
  BinarySearchTree
};