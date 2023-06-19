import { useApolloClient } from '@apollo/client'
import { useParams } from "react-router-dom"

// import { CharacterNav } from '../CharacterNav'
import { Person } from '../../generated/graphql'
import { fragments } from '../../queries'

import './characters.css'

// interface Props {
//   fetchMore: any;
// }

export function Characters() { // props: Props
  // const { fetchMore } = props

  const { id } = useParams()
  const client = useApolloClient()
  const cache = client.readFragment({
    id: `Film:${id}`,
    fragment: fragments.filmCharacters,
  })
  const characters = cache?.characterConnection?.characters
  // const pageInfo = cache?.characterConnection?.pageInfo

  if (!characters) {
    return null
  }
  
  return (
    <>
      {/* <CharacterNav fetchMore={fetchMore} pageInfo={pageInfo} /> */}

      <div className="characters">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Species</th>
              <th>Homeworld</th>
              <th>Height</th>
              <th>Mass</th>
            </tr>
          </thead>
          <tbody>
            {characters.map((character: Person): null | JSX.Element => {
              if (!character) return null

              return (
                <tr key={character?.id}>
                  <td>{character?.name}</td>
                  <td>{character?.species?.name}</td>
                  <td>{character?.homeworld?.name}</td>
                  <td>{character?.height}</td>
                  <td>{character?.mass}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}
