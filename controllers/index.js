class IndexController{
  static home(req, res) {
    res.send('Welcome to my server! - Naruto')
  }
  static errorPage(req, res) {
    res.send('404: Page Not Found!')
  }
}

module.exports = IndexController