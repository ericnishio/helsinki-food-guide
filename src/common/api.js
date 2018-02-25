import {createClient} from 'contentful'
import sortBy from 'lodash/sortBy'

import {setLocalStorageValue, getLocalStorageValue} from './localStorage'

export const ABOUT_ENTRY_ID = '2Uqcv9yuQEIWoQu8SW4kAG'

const state = {
  isOnline: navigator.onLine,
}

window.addEventListener('load', () => {
  window.addEventListener('online', () => state.isOnline = navigator.onLine)
  window.addEventListener('offline', () => state.isOnline = navigator.onLine)
})

const client = createClient({
  space: '9jmm61ik3148',
  accessToken: 'c2a2be0d37960b9f71ba0e0d31ac38bb908dc4a226bb311802d0361e4bcb700f',
})

export const loadDishes = async () => {
  if (!state.isOnline) {
    return getLocalStorageValue('dishes') || []
  }

  const response = await client.getEntries({
    content_type: 'dish',
    order: 'fields.name',
  })

  const dishes = parseDishesResponse(response)
  const sortedDishes = sortBy(dishes, dish => dish.restaurant.name)

  // Save data in local storage for later offline use
  setLocalStorageValue('dishes', sortedDishes)

  return sortedDishes
}

const parseDishesResponse = (response) =>
  response.items.map(item => ({
    name: item.fields.name,
    description: item.fields.description,
    price: item.fields.price,
    photos: item.fields.photos
      ? item.fields.photos.map(photo => photo.fields.file.url)
      : [],
    restaurant: item.fields.restaurant.fields,
  }))

const loadEntryById = async (id) => {
  const response = await client.getEntry(id)

  return response.fields
}

export const loadAboutPage = () =>
  loadEntryById(ABOUT_ENTRY_ID)

