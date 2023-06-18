const getData = async url => {
  const res = await fetch(url)
  if (!res.ok) {
    return false
  }
  return await res.json()
}

export { getData }
