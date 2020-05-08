const TokenTracker = require('eth-token-tracker')

module.exports = (config) => {
  return new BlockTracker({
    ...config,
    // Is currently configured to 8 seconds
    pollingInterval: (16 * 1000)
  })
}
