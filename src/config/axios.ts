import axios, { AxiosError, AxiosInstance, CreateAxiosDefaults } from 'axios';

function createAxiosInstance(options?: CreateAxiosDefaults): AxiosInstance {
  return axios.create({
    ...options,
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: false
  });
}

// export const AxiosPublicApiInstance = createAxiosInstance(
//   import.meta.env.VITE_PUBLIC_API
// );

// export const AxiosPrivateApiInstance = createAxiosInstance(
//   import.meta.env.VITE_PRIVATE_API
// );

export const AxiosBaseApiInstance = createAxiosInstance();

// const requestInterceptorHandler = (config: InternalAxiosRequestConfig) => {
//   // provide access token for private api requests
//   const accessToken = localStorage.getItem(ACCESS_TOKEN);

//   if (accessToken) {
//     config.headers.Authorization = `Bearer ${accessToken}`;
//   }

//   return config;
// };

const responseErrorHandler = (
  error: AxiosError<{ responseStatus: string; detail: string }>
) => {
  if (
    error.response?.status === 400 ||
    error.response?.data.responseStatus === 'INVALID_CREDENTIALS_EXCEPTION'
  ) {
    // Toast.error(error.response.data.detail);
    console.log(error.response.data.detail);
  }

  throw error;

  // return { data: { errors: error?.response?.data } };
};

AxiosBaseApiInstance.interceptors.response.use(
  (response) => response,
  responseErrorHandler
);
// AxiosPublicApiInstance.interceptors.response.use(
//   (response) => response,
//   responseErrorHandler
// );

// AxiosPrivateApiInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     // if refresh token is provided and access token is expired - refresh access token
//     if (error.response?.status === 401) {
//       const originalRequest = error.config;

//       try {
//         // await AuthenticationService.refreshToken();

//         const data = await AxiosPrivateApiInstance(originalRequest);

//         return data;
//       } catch (e) {
//         return Promise.reject(error);
//       }
//     }

//     responseErrorHandler(error);
//     return Promise.reject(error);
//   }
// );

// AxiosPrivateApiInstance.interceptors.request.use(requestInterceptorHandler);
