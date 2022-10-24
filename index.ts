import type { AxiosInstance, AxiosRequestConfig } from 'axios'

export function curryingAxios<D>(axios: AxiosInstance) {
  return (baseURL?: string) => {
    return {
      async get(url?: string, args: Record<string, any> = {}, cfg: AxiosRequestConfig = {}): Promise<D> {
        const { data } = await axios({
          baseURL,
          url,
          method: 'GET',
          params: args,
          ...cfg,
        })

        return data
      },
      async post(url?: string, args: Record<string, any> = {}, cfg: AxiosRequestConfig = {}): Promise<D> {
        const { data } = await axios({
          baseURL,
          url,
          method: 'POST',
          data: args,
          ...cfg,
        })

        return data
      },
    }
  }
}