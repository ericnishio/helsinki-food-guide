import {createClient} from 'contentful'

const client = createClient({
  space: '9jmm61ik3148',
  accessToken: 'c2a2be0d37960b9f71ba0e0d31ac38bb908dc4a226bb311802d0361e4bcb700f',
})

export const loadDishes = async () => {
  const response = await client.getEntries({content_type: 'dish'})

  return parseDishes(response)
}

const parseDishes = (response) =>
  response.items.map(item => ({
    name: item.fields.name,
    description: item.fields.description,
    price: item.fields.price,
    photos: item.fields.photos
      ? item.fields.photos.map(photo => photo.fields.file.url)
      : [],
    restaurant: item.fields.restaurant.fields,
  }))
