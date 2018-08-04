// 用于指定url的指定参数查询，结果返回数组对象
// 结果键值对形式：查询参数名，对应查询参数值
// 如未指定查询参数，返回所有
const getQuery=(url='',query='')=>{
  // 用于结果存放
    let result=[];
    if (!url) {
      url=window.location.href;
    }
    if (url.indexOf('?')>-1) {
      if (!query) {
        // 无查询参数时返回url中所有参数结果集合
        let tmp=url.split('?')[1].split('&');
        tmp.forEach((item,index)=>{
          // 保存查询并转码
          let tmpObj={};
          tmpObj[item.split('=')[0]]=unescape(item.split('=')[1]);
          result.push(tmpObj);
        })
      }
//出错了
      // else {
      //     // 有查询参数时正则匹配到结果并返回
      //     // 嗯，正则的方式没搞懂。网上看到的
      //   let reg = new RegExp("(^|&)" + query + "=([^&]*)(&|$)", "i");
      //   console.log(reg);
      //   let r =  url.search().substr(1).match(reg);
      //   console.log(r);
      //   if (r != null)
      //     result.push({query:unescape(r[2])});
      // }

    }else {
      return result;
    }
    return result;
}
