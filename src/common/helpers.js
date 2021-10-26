export const formatPrice = (value, currency) =>
  `${currencyToSymbol(currency)} ${value.toFixed(2)}`

export const addressToGoogleMapsUrl = (address) => {
  const normalizedAddress = address.split(' ').join('+')

  return `https://www.google.com/maps/place/${normalizedAddress}`
}

export const wait = (durationMs) => new Promise((resolve) =>
  setTimeout(resolve, durationMs)
)

const currencyToSymbol = (currency) => {
  switch (currency) {
    case 'EUR':
      return '€'

    default:
      return currency
  }
}
