
describe('Spider homepage', function() {

  beforeEach(function(){
    browser.ignoreSynchronization = true;
  });
    browser.manage().timeouts().implicitlyWait(10000);

    browser.get('https://cciha.ccinteg.com');

    element(by.name('Username')).sendKeys('swadmin');

    element(by.name('Password')).sendKeys('P@ssw0rd');

    element(by.xpath("//span[contains(text(),'Login')]")).click();

    element(by.linkText('Receiving')).click();

    element(by.xpath("//span[contains(text(),'Receive New')]")).click();

    element(by.name('Comment')).sendKeys('test comment');

    element(by.name('Custpo')).sendKeys('ASASADDAD');

    element(by.linkText('Enter Items')).click();

});



/*
describe('Spider homepage', function() {
// TODO: use page objects
  var loginNameInputElm = element(by.name('Username')) ;
  var passwordInputElm = element(by.name('Password')) ;
  var loginBtnElm = element(by.xpath("//span[contains(text(),'Login')]"));

  it('non-angular page so ignore sync and active wait to load', function() {
    browser.ignoreSynchronization = true;
    browser.get('https://cciha.ccinteg.com');

    expect(loginNameInputElm.waitSeconds()).toBeTruthy();
    expect(passwordInputElm.isPresent()).toBe(true);
  });

  it('should fill user and password and logins', function() {
    loginNameInputElm.sendKeys('swadmin');
    passwordInputElm.sendKeys('P@ssw0rd');
    loginBtnElm.click();
  });
});*/
