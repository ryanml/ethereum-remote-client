const PreferencesController = require('../../../../app/scripts/controllers/preferences')

module.exports = class BravePreferencesController extends PreferencesController {
  constructor (opts = {}) {
    if (opts.initState === undefined) {
      opts['initState'] = {}
    }
    opts.initState.batTokenAdded = false
    opts.initState.rewardsDisclosureAccepted = false
    super(opts)
  }

  setBatTokenAdded () {
    this.store.updateState({ batTokenAdded: true })
    return Promise.resolve(true)
  }

  setRewardsDisclosureAccepted () {
    this.store.updateState({ rewardsDisclosureAccepted: true })
    return Promise.resolve(true)
  }

  resetMetaMaskState () {
    this.store.updateState({})
    return Promise.resolve(true)
  }
}
