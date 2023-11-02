const addMaster = (build) =>
  build.mutation({
    query: ({ id, data }) => ({
      url: `api/users`,
      method: "post",
      body: data,
    }),
  });

export default addMaster;
