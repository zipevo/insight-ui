const { By } = require('selenium-webdriver');

function BlockPage(driver) {
  const blockId = driver.findElement(By.xpath('//*[contains(text(), "Block #")]'));
  const blockHash = driver.findElement(By.css('.txid.text-muted.ng-binding'));

  const numberOfTrxs = driver.findElement(By.xpath('//table//tr[1]//td[2]'));
  const height = driver.findElement(By.xpath('//table//tr[2]//td[2]'));
  const blockReward = driver.findElement(By.xpath('//table//tr[3]//td[2]'));
  const timestamp = driver.findElement(By.xpath('//table//tr[4]//td[2]'));
  const minedBy = driver.findElement(By.xpath('//table//tr[5]//td[2]'));
  const merkleRoot = driver.findElement(By.xpath('//table//tr[6]//td[2]//span[2]'));
  const previousBlock = driver.findElement(By.xpath('//table//tr[7]//td[2]'));
  const difficulty = driver.findElement(By.xpath("//div[@class='col-md-6'][2]/table//tr[1]/td[2]"));
  const bits = driver.findElement(By.xpath("//div[@class='col-md-6'][2]/table//tr[2]/td[2]"));
  const size = driver.findElement(By.xpath("//div[@class='col-md-6'][2]/table//tr[3]/td[2]"));
  const version = driver.findElement(By.xpath("//div[@class='col-md-6'][2]/table//tr[4]/td[2]"));
  const nonce = driver.findElement(By.xpath("//div[@class='col-md-6'][2]/table//tr[5]/td[2]"));
  const nextBlock = driver.findElement(By.xpath("//div[@class='col-md-6'][2]/table//tr[6]/td[2]"));

  const trxHash = driver.findElement(By.xpath("//a[contains(@href,'tx/')]"));

  this.getBlockId = () => blockId.getText();

  this.getBlockHash = () => blockHash.getText();

  this.getNumberOfTrxs = () => numberOfTrxs.getText();

  this.getHeight = () => height.getText();

  this.getBlockReward = () => blockReward.getText();

  this.getTimestamp = () => timestamp.getText();

  this.getMinedBy = () => minedBy.getText();

  this.getMerkleRoot = () => merkleRoot.getText();

  this.getPreviousBlock = () => previousBlock.getText();

  this.getDifficulty = () => difficulty.getText();

  this.getBits = () => bits.getText();

  this.getSize = () => size.getText();

  this.getVersion = () => version.getText();

  this.getNonce = () => nonce.getText();

  this.getNextBlock = () => nextBlock.getText();

  this.getTrxHash = () => trxHash.getText();
}
module.exports = BlockPage;
