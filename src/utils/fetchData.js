const getData = async (url) => {
  try {
    const res = await fetch(url)

    if (!res.ok) return false

    return await res.json()
  } catch (err) {
    console.log(
      `Не удалось получить содержимое ${url}  из за ошибки ${err.message} `
    )
  }
}


export {getData}