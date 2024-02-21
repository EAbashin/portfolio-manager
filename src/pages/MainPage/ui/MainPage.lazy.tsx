import { lazy } from 'react'

const MainPageLazy = lazy(
  async () =>
    await new Promise((resolve) => {
      setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        resolve(import('./MainPage'))
      }, 1500)
    })
)

export default MainPageLazy
