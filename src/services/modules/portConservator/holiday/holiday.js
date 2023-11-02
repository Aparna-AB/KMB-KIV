import { pagination } from "../../../../utils/constants";

export const  addHoliday = (build) =>
    build.mutation({
    query: ({data}) =>({
    url: `holiday`,
    method: 'post',
    body:data,
    }),
});

export const fetchHoliday = (build) => {
    return build.query({
        query: ({ searchParams, page, userId}) => {
            const url = searchParams
            ? `holiday/?status=Active&limit=${pagination.limit}&page=${
                page || 1
            }&search=${searchParams || ""}&userId=${userId}`
            : `holiday/?staus=Active&limit=${pagination.limit}&page=${
                page || 1
            }&userId=${userId}`;
            return url;
        }, 
    });
};

export const fetchAllHoliday = (build) => {
    return build.query({
      query: () => {
        const url = `holiday?status=Aactive`;  
        return url;
      },
    });
  };

export const updateHoliday = (build) =>
 build.mutation({
    query: ({ data, id}) => ({
        url: `holiday/${id}`,
        method: `put`,
        body: data,
    }),
 });
