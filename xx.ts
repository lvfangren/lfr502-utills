/**
 *
 * 判断ip地址是否合法有效
 * @param {*} ips
 * @returns
 */
function isIP(ips: string): boolean {
    let ipArr = ips.split('.')
    if(ipArr.length !== 4) {
      return false
    }

    for (let index = 0; index < ipArr.length; index++) {
    // 点分十进制，只考虑十进制问题
        
    //   if(ipArr[index].length > 3) {
    //     return false
    //   }  


    //   const items = +ipArr[index]

    //   // 过滤带字符串
    //   if(isNaN(items)) {
    //     return false
    //   }
      
    //   if(items < 0 || items > 255) {
    //     return false
    //   }
        /^([1-9][0-9]{0,2}|[0-9]{1})$/.test(ipArr[index])
    }
    return true

    // methods 2
    // return /\d(.)/.test(ips)
}


// case 1: 
// 127.0.0.1

// case 2: 
// 255.255.255.255

// case 3: 
// 0.0.0.0



console.log('0127.0.0.1', isIP('0127.0.0.1'))

console.log('255.255.255.255', isIP('255.255.255.255'))

console.log('-2.21.2121.2', isIP('-2.21.2121.2'))

console.log('0x127.0.0.1', isIP('0x127.0.0.1'))

console.log('1cs27.0cs.0.1', isIP('1cs27.0cs.0.1'))

console.log('111.0.2.1', isIP('111.0.2.1'))

console.log('0.0.0.0', isIP('0.0.0.0'))


console.log('01.0.0.1', isIP('01.0.0.1'))





// type TreeItem = {
//     id: number,
//     children?: TreeItem
// }
// let tree: TreeItem[] =[
//     {
//         id: 1, 
//         children: [
//             {
//               id: 2,
//               children: [
//                 {
//                   id: 3
//                 },
//                 {
//                   id: 9
//                 },
//                 {
//                   id: 10
//                 },
//                 {
//                   id: 4
//                 }
//               ]
//             }
//         ]
//     },
//     {
//       id: 5,
//       children: [
//         {
//             id: 6,
//             children: [
//                 {
//                     id: 7
//                 },
//                 {
//                     id: 8
//                 }
//             ]
//         }
//       ]
//     }
// ]

// 思路：  树形结构，深度优先，广度优先遍历
/**
 * return 指定ID的相关节点组数
 * @param id 
 * @param targetTree 
 */
  // function getPath(id: number, targetTree: TreeItem[]): TreeItem[] {
  //       let result: TreeItem[] = []
  //       // 过滤特殊case
  //       // if(targetTree.length <= 0 || JSON.stringify(targetTree).indexOf(String(id)) < -1) {
  //       //     return []
  //       // }

  //       // 遍历树
  //       for(let i = 0; i < targetTree.length; i++) {
  //          let tmpNode = targetTree[i]
  //          result.push(tmpNode)

  //          if(tmpNode.id === id) {
  //             return result 
  //          } 

           
  //       }    

  //       return result
  // }
  //  匹配节点
  // function innerDeep(node, id) {
    // if(!node.children ) {
    //     return 
    // }
    // if(node.id === id) {
    //     return node
    // }
  // }
  /**
   * input: 10
   * output: [{id: 10}, {id: 2, children: [
        {id: 3},
        {id: 9},
        {id: 10},
        {id: 4}
      ]}, {id: 1, children: [
      {id: 2, children: [
        {id: 3},
        {id: 9},
        {id: 10},
        {id: 4}
      ]}
    ]}]
   */