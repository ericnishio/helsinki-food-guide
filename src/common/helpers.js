import {useState, useEffect} from 'react'

export const formatPrice = (value, currency) =>
  `${value.toFixed(2)} ${currencyToSymbol(currency)}`

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

export const useContent = (fetcher) => {
  const [content, setContent] = useState()

  const fetchContent = async () => {
    try {
      setContent(await fetcher())
    } catch (e) {
      window.alert('Server error')
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)

    fetchContent()
  }, [])

  return content
}
