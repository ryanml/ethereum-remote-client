import { connect } from 'react-redux'
import { providerSetSelectedAccount } from '../../../store/actions'
import ProviderSell from './provider-sell.component'

function mapStateToProps (state) {
  const { accounts, selectedAccount } = state.metamask.externalProvider
  return { accounts, selectedAccount }
}

function mapDispatchToProps (dispatch) {
  return {
    selectAccount: id => dispatch(providerSetSelectedAccount(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProviderSell)
