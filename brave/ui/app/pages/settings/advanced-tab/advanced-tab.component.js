import React from 'react'
import AdvancedTab from '../../../../../../ui/app/pages/settings/advanced-tab/advanced-tab.component'
import { DEFAULT_ROUTE } from '../../../helpers/constants/routes'

module.exports = class BraveAdvancedTab extends AdvancedTab {

  clearAppState = () => {
    this.props.clearAppState()
    this.props.history.push(DEFAULT_ROUTE)
  }

  renderMobileSync () {
    return null
  }

  renderAutoLogoutTimeLimit () {
    return (
      <div>
        {super.renderAutoLogoutTimeLimit()}
        <button onClick={this.clearAppState}>{'Reset App State'}</button>
      </div>
    )
  }
}
