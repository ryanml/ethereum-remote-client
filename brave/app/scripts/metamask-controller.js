const MetamaskController = require('../../../app/scripts/metamask-controller')
const nodeify = require('../../../app/scripts/lib/nodeify')
const NetworkController = require('.../../../app/scripts/controllers/network')
const KeyringController = require('eth-keyring-controller')
const TrezorKeyring = require('eth-trezor-keyring')
const LedgerBridgeKeyring = require('eth-ledger-bridge-keyring')

module.exports = class BraveController extends MetamaskController {
  constructor (opts) {
    super(opts)

    const state = this.getState()
    console.log({state})
    /*
    if (!state.isInitialized) {
      this.networkController = new NetworkController(opts.initState.NetworkController)
      this.keyringController = new KeyringController({
        initState: opts.initState || {},
        keyringTypes: [TrezorKeyring, LedgerBridgeKeyring],
        getNetwork: this.networkController.getNetworkState.bind(this.networkController),
        encryptor: opts.encryptor || undefined,
      })
    }
    */
  }
  getApi () {
    const api = super.getApi()
    api.setBatTokenAdded = nodeify(this.preferencesController.setBatTokenAdded, this.preferencesController)
    api.setHardwareConnect = nodeify(this.preferencesController.setHardwareConnect, this.preferencesController)
    api.setRewardsDisclosureAccepted = nodeify(this.preferencesController.setRewardsDisclosureAccepted, this.preferencesController)
    return api
  }
}
