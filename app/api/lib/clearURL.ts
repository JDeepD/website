const clearUrl = (url: string) => {
  const { pathname } = new URL(url)
  return pathname
}

export default clearUrl