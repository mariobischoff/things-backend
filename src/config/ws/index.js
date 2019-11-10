export default {
  wsOptions: {
    verifyClient: function (info, cb) {
      cb()
    }
  }
}