import {useState, useEffect} from 'react'
import {createClient} from 'contentful'
import sortBy from 'lodash/sortBy'

import {setLocalStorageValue, getLocalStorageValue} from './localStorage'

export const useContentLoader = (contentLoader) => {
  const [content, setContent] = useState()

  const loadContent = async () => {
    try {
      setContent(await contentLoader())
    } catch (e) {
      window.alert('Server error')
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)

    loadContent()
  }, [])

  return content
}

const Contentful = {
  Api: {
    SPACE: '9jmm61ik3148',
    ACCESS_TOKEN: 'c2a2be0d37960b9f71ba0e0d31ac38bb908dc4a226bb311802d0361e4bcb700f',
  },
  Pages: {
    ABOUT: '2Uqcv9yuQEIWoQu8SW4kAG',
    PRIVACY_POLICY: '50lsWJZIyAOmKAEIKu0YAG',
  },
}

const client = createClient({
  space: Contentful.Api.SPACE,
  accessToken: Contentful.Api.ACCESS_TOKEN,
})

export const loadDishes = async () => {
  if (!navigator.onLine) {
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
    id: item.sys.id,
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
  loadEntryById(Contentful.Pages.ABOUT)

export const loadPrivacyPolicyPage = () =>
  loadEntryById(Contentful.Pages.PRIVACY_POLICY)
