

export default {
  "POST /umi/list": (req, res) => {
    console.log(req.body.username);
    res.end("ok")
  }
}