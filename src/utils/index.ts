const sortObjArray = <T>(source: any[], key: string): T[] => {
  if (!source.length) return []

  return [...source].sort((a, b) => {
    if (a?.[key] > b?.[key]) return 1
    if (b?.[key] > a?.[key]) return -1
    return 0
  })
}

export const utils = {
  sortObjArray
}