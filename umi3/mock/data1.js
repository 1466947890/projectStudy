export default {
  // 支持值为Object 和 Arrary
  "GET /umi/goods":{
    success: true,
    errorCode: "xx",
    errorMessage: "ooo",
    showType: 1,
    traceId: 'i',
    data: [
      {id: 1, name: "韭菜"},
      {id: 2, name: "西红柿"},
    ]
  }
}

// export default {
//   "POST /api/users/create": (req, res) => {
//     res.end("ok")
//   }
// }