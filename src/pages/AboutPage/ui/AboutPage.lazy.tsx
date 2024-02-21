import { lazy } from 'react'

const AboutPageLazy = lazy(
  async () =>
    await new Promise((resolve) =>
      setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        resolve(import('./AboutPage'))
      }, 1500)
    )
)

export default AboutPageLazy
