import './CharacterNav.css'

interface Props {
  fetchMore: any;
  pageInfo: any;
}

export function CharacterNav( props: Props ) {
  const { fetchMore, pageInfo } = props

  const fetchNext = () => fetchMore({
    variables: {
      cursor: pageInfo.endCursor,
    },
  })
  const fetchPrevious = () => fetchMore({
    variables: {
      cursor: pageInfo.startCursor,
    },
  })
  
  // disabled={!pageInfo.hasPreviousPage}
  // disabled={!pageInfo.hasNextPage}

  return (
    <>
      <ul className="characterNav">
        <li><button onClick={fetchPrevious}>Prev</button></li>
        <li><button onClick={fetchNext}>Next</button></li>
      </ul>
      <p>{pageInfo.startCursor} | {pageInfo.endCursor} | {pageInfo.hasNextPage} | {pageInfo.hasPreviousPage}</p>
    </>
  )
}
