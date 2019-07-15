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
  if(currentNode.data === newNode.data){
    return true
  }
  if(currentNode.data < newNode.data){
    if(currentNode.right){
      return findOrAdd()
    }
    
  }
  
}
