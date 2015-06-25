var env = require('../environment.js');
describe('pages with login', function() {
  it('should log in with a non-Angular page', function() {
    browser.ignoreSynchronization = true;
    browser.get(env.baseUrl + '/index.html');

    browser.driver.findElement(by.name('Username')).sendKeys('swadmin');
    browser.driver.findElement(by.name('Password')).sendKeys('P@ssw0rd');
    browser.driver.findElement(by.name('Login')).click();

/*    var angularElement = element(by.model('username'));
    expect(angularElement.getAttribute('value')).toEqual('Anon');

    // Make sure the cookie is still set.
    browser.manage().getCookie('testcookie').then(function(cookie) {
      expect(cookie.value).toEqual('Jane-1234');
    });*/
  });
});
