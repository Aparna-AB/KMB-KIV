const fetchOne = (build) =>
  build.query({
    query: (id) => `api/users?page=2`,
  })
export default fetchOne
