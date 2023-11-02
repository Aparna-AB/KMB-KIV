export const sendOtp = (build) =>
  build.mutation({
    query: (data) => ({
      
      url: `otp/send-otp`,
      method: "post",
      body: data,
    }),
     });

  export const verifyOtp = (build) =>
  build.mutation({
    query: (data) => ({
      url: `otp/verify-otp`,
      method: "post",
      body: data,
    }),
  });
