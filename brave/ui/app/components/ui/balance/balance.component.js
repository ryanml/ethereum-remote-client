import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Balance from '../../../../../../ui/app/components/ui/balance'

export default class BraveBalance extends PureComponent {
  static propTypes = {
    viewingProvider: PropTypes.bool.isRequired,
  }

  render () {
    const {
      viewingProvider,
      ...metamaskProps
    } = this.props

    if (!viewingProvider) {
      return (
        <Balance {...metamaskProps} />
      )
    }

    return null
  }
}
