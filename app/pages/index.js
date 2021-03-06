// Example of a page written as a React component in a .js file.

// Every page should export a `meta` object with at least a title.
export const meta = {
  title: 'Your Tropical site'
}

import React from 'react'
import ExamplePostList from '../components/ExamplePostList/ExamplePostList'

// Note we're importing ExampleComponent wrapped in asIsland, so it will be hydrated in the browser.
import { ExampleComponentIsland } from '../components/ExampleComponent/ExampleComponent'

export default function IndexPage ({ collections }) {
  return (
    <>
      <ExampleComponentIsland alertMessage='Hello!' />
      <ExamplePostList posts={collections.posts} />
    </>
  )
}
