import { useQuery } from '@apollo/client'

import { FilmList } from '../../components'
import { Film } from '../../generated/graphql';
import { queries } from '../../queries'
import { utils } from '../../utils'

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
