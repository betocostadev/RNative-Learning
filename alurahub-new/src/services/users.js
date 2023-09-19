import api from '.'

const getUsers = async () => {
  const url = '/users/'
  const response = await api.get(url)
  return response.data
}

export { getUsers }
