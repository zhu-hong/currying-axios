import type { AxiosInstance, AxiosRequestConfig } from 'axios'

export function curryingAxios(axios: AxiosInstance) {
  return (baseURL?: string) => {
    return {
      async get(url?: string, args: Record<string, any> = {}, cfg: AxiosRequestConfig = {}) {
        const { data } = await axios({
          baseURL,
          url,
          method: 'GET',
          params: args,
          ...cfg,
        })

        return data
      },
      async post(url?: string, args: Record<string, any> = {}, cfg: AxiosRequestConfig = {}) {
        const { data } = await axios({
          baseURL,
          url,
          method: 'POST',
          params: args,
          ...cfg,
        })

        return data
      },
    }
  }
}