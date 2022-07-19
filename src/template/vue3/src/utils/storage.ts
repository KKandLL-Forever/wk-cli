/**
 * @description window.localStorage封装
 **/

export const getItem = <T>(key: string): T | null => {
  const result = window.localStorage.getItem(key)
  if (result === null) return null
  return (JSON.parse(window.localStorage.getItem(key) as string)) as T
}
export const setItem = (key: string, value: object | string | null) => {
  window.localStorage.setItem(key, JSON.stringify(value))
}
export const removeItem = (key: string) => {
  window.localStorage.removeItem(key)
}
