const api = "http://localhost:3001"


// Generate a unique token for storing your bookshelf data on the backend server.
// let token = localStorage.token
// if (!token)
//   token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': 'Authorization'
}

export const getAll = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

// export const fetchCategories = () => fetch('/categories');