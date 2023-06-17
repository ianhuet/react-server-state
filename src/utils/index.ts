const romanise = (num: number): string => {
  if (isNaN(num))
    return '';

  const digits: string[] = String(+num).split("")
  const key: string[] = [
    "","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
    "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
    "","I","II","III","IV","V","VI","VII","VIII","IX"
  ]
  let roman = ""
  let i = 3
  
  while (i--)
      roman = (key[+digits.pop() + (i * 10)] || "") + roman
  
  return Array(+digits.join("") + 1).join("M") + roman
}

const sortObjArray = <T>(source: any[], key: string): T[] => {
  if (!source.length) return []

  return [...source].sort((a, b) => {
    if (a?.[key] > b?.[key]) return 1
    if (b?.[key] > a?.[key]) return -1
    return 0
  })
}

export const utils = {
  romanise,
  sortObjArray
}