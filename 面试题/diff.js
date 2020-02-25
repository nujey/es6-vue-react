function diff(oldTree, newTree) {
  var index = 0
  var patches = {}
  dfsWalk(oldTree, newTree, index, patches)
  return patches
}

// 进行深度优先遍历
function dfsWalk(oldNode, newNode, index, patches) {
  var currentPatch = []
  if (typeof (oldNode) === 'string' && typeof (newNode) === 'string') {
    // 文本内容改变
    if (newNode !== oldNode) {
      currentPatch.push({ type: patch.TEXT, content: newNode })
    }
  } else if (newNode !== null && oldNode.tagName === newNode.tagName && oldNode.key === newNode.key) {
    // 节点相同，比较属性
    var propsPatches = diffProps(oldNode, newNode)
    if (propsPatches) {
      currentPatch.push({ type: patch.PROPS, props: propsPatches  })
    }
    // 比较子节点，比较子节点，如果子节点有‘ignore’属性，则不需要比较
    if(!isIgnoreChildren(newNode)) {
      diffChildren(oldNode.children, newNode.children, index, patches, currentPatch)
    }
  } else if (newNode !== null) {
    // 新节点和旧节点不同 用replace替换
    currentPatch.push({ type: patch.REPLACE, node: newNode })
  }

  if (currentPatch.length) {
    patches[index] = currentPatch
  }
}
function patch (node, patches) {
  var walker = { index: 0 }
  dfsWalk(node, walker, patches)
}

function applyPatches(node, currentPatches) {
  currentPatch.forEach(currentPatch => {
    switch (currentPatch.type) {
      case PROPS:
        setProps(node, currentPatch.props)
        break;
      case REPLACE:
        var newNode = (typeof currentPatch.node === 'string')
          ? document.createTextNode(currentPatch.node)
          : currentPatch.node.render()
          node.parentNode.replaceChild(newNode, node)
        break;
      case REORDER:
        reorderChildren(node, currentPatch.moves)
        break;
      case TEXT:
        node.textContent = currentPatch.content
        break;
      default:
        throw new Error('Unknown patch type' + currentPatch.type)
    }
  })
}
