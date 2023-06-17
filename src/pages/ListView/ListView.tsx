import { useQuery } from '@apollo/client'

import { FilmList } from '../../components'
import { queries } from '../../queries'

<template>
  <main>
    <p v-if="error">Something went wrong...</p>
    <p v-if="loading">Loading...</p>
  </main>
</template>

export function ListView() {
  const { loading, error } = useQuery(queries.listFilms)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (<FilmList />)
}
