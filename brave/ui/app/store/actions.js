const MetaMaskActions = require('../../../../ui/app/store/actions')

MetaMaskActions.addToken = addToken
MetaMaskActions.setBatTokenAdded = setBatTokenAdded
MetaMaskActions.SET_BAT_TOKEN_ADDED = 'SET_BAT_TOKEN_ADDED'

MetaMaskActions.setRewardsDisclosureAccepted = setRewardsDisclosureAccepted

MetaMaskActions.showModal = showModal

var background = null
const parentSetBackground = MetaMaskActions._setBackgroundConnection

function setBackgroundConnection (newConnection) {
  parentSetBackground(newConnection)
  background = newConnection
}

MetaMaskActions._setBackgroundConnection = setBackgroundConnection
MetaMaskActions.resetMetaMaskState = resetMetaMaskState
MetaMaskActions.resetAppState = resetAppState

function setBatTokenAdded () {
  return (dispatch) => {
    background.setBatTokenAdded((err) => {
      if (err) {
        return dispatch(MetaMaskActions.displayWarning(err.message))
      }
    })
    dispatch({
      type: MetaMaskActions.SET_BAT_TOKEN_ADDED,
      value: true,
    })
  }
}

function setRewardsDisclosureAccepted () {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      background.setRewardsDisclosureAccepted((err) => {
        if (err) {
          dispatch(MetaMaskActions.displayWarning(err.message))
          return reject(err)
        }
        return MetaMaskActions.forceUpdateMetamaskState(dispatch).then(() => resolve())
      })
    })
  }
}

function addToken (address, symbol, decimals, image) {
  return (dispatch) => {
    dispatch(MetaMaskActions.showLoadingIndication())
    return new Promise((resolve, reject) => {
      background.addToken(address, symbol, decimals, image, (err, tokens) => {
        dispatch(MetaMaskActions.hideLoadingIndication())
        if (err) {
          dispatch(MetaMaskActions.displayWarning(err.message))
          reject(err)
        } else if (symbol === 'BAT') {
          dispatch(MetaMaskActions.setBatTokenAdded())
        }
        dispatch(MetaMaskActions.updateTokens(tokens))
        resolve(tokens)
      })
    })
  }
}

function resetMetaMaskState () {
  return (dispatch) => {
    background.resetMetaMaskState((err) => {
      if (err) {
        return dispatch(MetaMaskActions.displayWarning(err.message))
      }
    })
  }
}

function resetAppState () {
  return (dispatch) => {
    background.resetAppState((err) => {
      if (err) {
        return dispatch(MetaMaskActions.displayWarning(err.message))
      }
    })
  }
}

function showModal (payload) {
  if (payload.name === 'METAMETRICS_OPT_IN_MODAL') {
    return {
      type: '',
      payload: {},
    }
  }

  return {
    type: MetaMaskActions.MODAL_OPEN,
    payload,
  }
}

module.exports = MetaMaskActions
