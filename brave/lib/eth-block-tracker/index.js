const BlockTracker = require('eth-block-tracker')

module.exports = (config) => {
  return new BlockTracker({
    ...config,
    // Defaults to 20 seconds
    pollingInterval: (30 * 1000)
  })
}
