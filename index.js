function inOrder(currentNode){
  let ordered = [];
  //let rootNode = currentNode;
}

function min(currentNode){
  if(currentNode.left){
    return min(currentNode.left)
  }else{
    return currentNode
  }
}

function max(currentNode){
  if(currentNode.right){
    return max(currentNode.right)
  }else{
    return currentNode
  }
}

function findOrAdd(currentNode, newNode){
  
  
}
