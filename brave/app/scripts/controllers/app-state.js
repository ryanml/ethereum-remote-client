const AppStateController = require('../../../../app/scripts/controllers/app-state')

module.exports = class BraveAppStateController extends AppStateController {

  resetAppState () {
    this.store.updateState({})
    return Promise.resolve(true)
  }
}
