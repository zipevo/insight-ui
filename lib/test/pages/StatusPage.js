const { By } = require('selenium-webdriver');

function StatusPage(driver) {
  const syncProgress = driver.findElement(By.xpath('//table//tr[1]//td[2]'));
  const currentSyncStatus = driver.findElement(By.xpath('//table//tr[2]//td[2]'));
  const startDate = driver.findElement(By.xpath('//table//tr[3]//td[2]'));
  const initialBlockChainHeight = driver.findElement(By.xpath('//table//tr[5]//td[2]'));
  const syncedBlocks = driver.findElement(By.xpath('//table//tr[6]//td[2]'));
  const skippedBlocks = driver.findElement(By.xpath('//table//tr[7]//td[2]'));
  const syncType = driver.findElement(By.xpath('//table//tr[8]//td[2]'));

  const lastBlockHash = driver.findElement(By.xpath('//table[2]//tr[1]//td[2]'));
  const currentBlockchainTip = driver.findElement(By.xpath('//table[2]//tr[2]//td[2]'));

  const version = driver.findElement(By.xpath("//h2[contains(text(), 'Dash node information')]/../table//tr[1]//td[2]"));
  const protocolVersion = driver.findElement(By.xpath("//h2[contains(text(), 'Dash node information')]/../table//tr[2]//td[2]"));
  const blocks = driver.findElement(By.xpath("//h2[contains(text(), 'Dash node information')]/../table//tr[3]//td[2]"));
  const timeOffset = driver.findElement(By.xpath("//h2[contains(text(), 'Dash node information')]/../table//tr[4]//td[2]"));
  const connections = driver.findElement(By.xpath("//h2[contains(text(), 'Dash node information')]/../table//tr[5]//td[2]"));
  const miningDifficulty = driver.findElement(By.xpath("//h2[contains(text(), 'Dash node information')]/../table//tr[6]//td[2]"));
  const network = driver.findElement(By.xpath("//h2[contains(text(), 'Dash node information')]/../table//tr[7]//td[2]"));
  const proxySetting = driver.findElement(By.xpath("//h2[contains(text(), 'Dash node information')]/../table//tr[8]//td[2]"));
  const infoErrors = driver.findElement(By.xpath("//h2[contains(text(), 'Dash node information')]/../table//tr[9]//td[2]"));


  this.getSyncProgress = () => syncProgress.getText();

  this.getCurrentSyncStatus = () => currentSyncStatus.getText();

  this.getStartDate = () => startDate.getText();

  this.getInitialBlockChainHeight = () => initialBlockChainHeight.getText();

  this.getSkippedBlocks = () => skippedBlocks.getText();

  this.getSyncedBlocks = () => syncedBlocks.getText();

  this.getSyncType = () => syncType.getText();

  this.getLastBlockHash = () => lastBlockHash.getText();

  this.getCurrentBlockchainTip = () => currentBlockchainTip.getText();

  this.getVersion = () => version.getText();

  this.getProtocolVersion = () => protocolVersion.getText();

  this.getBlocks = () => blocks.getText();

  this.getTimeOffset = () => timeOffset.getText();

  this.getConnections = () => connections.getText();

  this.getMiningDifficulty = () => miningDifficulty.getText();

  this.getNetwork = () => network.getText();

  this.getProxySetting = () => proxySetting.getText();

  this.getInfoErrors = () => infoErrors.getText();
}
module.exports = StatusPage;
