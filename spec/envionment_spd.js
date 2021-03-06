// Common configuration files with defaults plus overrides from environment vars
var webServerDefaultPort = 443;

module.exports = {
    // The address of a running selenium server.
    seleniumAddress:
        (process.env.SELENIUM_URL || 'http://localhost:4444/wd/hub'),

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName':
            (process.env.TEST_BROWSER_NAME || 'chrome'),
        'version':
            (process.env.TEST_BROWSER_VERSION || 'ANY')
    },

    // Default http port to host the web server
    webServerDefaultPort: webServerDefaultPort,

    // Protractor interactive tests
    interactiveTestPort: 6969,

    // A base URL for your application under test.
    baseUrl:
    'https://' + (process.env.HTTP_HOST || 'cciha.ccinteg.com') +
    ':' + (process.env.HTTP_PORT || webServerDefaultPort)

};