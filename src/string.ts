export const reverse = (s: string): string => {
  console.log([...s].reverse())
  return [...s].reverse().join('')
}