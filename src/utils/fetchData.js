const getData = async url => {
  const res = await fetch(url)
  if (!res.ok) {
    return false
  }
  return await res.json()
}



const postData = async (url, body) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
	body
  })

  if (!res.ok) {
	return false
  }

  return await res.json()
}

export { getData, postData }