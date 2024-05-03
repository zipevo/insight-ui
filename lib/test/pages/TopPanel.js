const { By } = require('selenium-webdriver');

function TopPanel(driver) {
  const openBlockPage = driver.findElement(By.xpath(`//a[@href='blocks']`));
  const openStatusPage = driver.findElement(By.xpath(`//a[@href='status']`));
  const search = driver.findElement(By.id(`search`));

  this.search = (text) => {
    search.sendKeys(text);
    search.submit();
  };

  this.openBlockPage = () => {
    openBlockPage.click();
  };

  this.openStatusPage = () => {
    openStatusPage.click();
  };
}
module.exports = TopPanel;
