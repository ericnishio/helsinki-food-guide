export const formatPrice = (value, currency) => {
  return `${value.toFixed(2)} ${currencyToSymbol(currency)}`
}

export const addressToGoogleMapsUrl = (address) => {
  const normalizedAddress = address.split(' ').join('+')

  return `https://www.google.com/maps/place/${normalizedAddress}`
}

const currencyToSymbol = (currency) => {
  switch (currency) {
    case 'EUR':
      return '€'

    default:
      return currency
  }
}
