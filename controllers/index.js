class IndexController{
  static home(req, res) {
    res.send('Welcome to my demo server!')
  }
  static errorPage(req, res) {
    res.send('404: Page Not Found!')
  }
}

module.exports = IndexController