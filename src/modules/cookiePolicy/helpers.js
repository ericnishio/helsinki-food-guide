import once from 'lodash/once'

import {getLocalStorageValue} from '../../common/localStorage'

export const getDefaultPolicyValues = policies => {
  const values = {}

  policies.forEach(policy => values[policy.value] = true)

  return values
}

export const runWithCookiePolicies = () => {
  const cookiePolicies = getLocalStorageValue('cookiePolicies') || {}

  if (cookiePolicies.statistics) {
    googleAnalytics()
  }
}

const googleAnalytics = once(() => {
  window.dataLayer = window.dataLayer || []

  function gtag() {
    // eslint-disable-next-line
    dataLayer.push(arguments)
  }

  gtag('js', new Date())
  gtag('config', 'UA-2347685-11')
})
