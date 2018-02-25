const NAMESPACE = 'helsinkifoodguide'

export const setLocalStorageValue = (key, value) => {
  const json = JSON.stringify(value)

  window.localStorage.setItem(`${NAMESPACE}_${key}`, json)
}

export const getLocalStorageValue = (key) => {
  const json = window.localStorage.getItem(`${NAMESPACE}_${key}`)

  return JSON.parse(json)
}
