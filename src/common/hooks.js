import {useState, useEffect} from 'react'

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
