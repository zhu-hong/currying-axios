import type { AxiosInstance, AxiosRequestConfig } from 'axios'

export function curryingAxios<D>(axios: AxiosInstance) {
  return (baseURL?: string) => {
    return {
      async get(url?: string, payload: Record<string, any> = {}, cfg: AxiosRequestConfig = {}): Promise<D> {
        const { data } = await axios({
          baseURL,
          url,
          method: 'GET',
          params: payload,
          ...cfg,
        })

        return data
      },
      async post(url?: string, payload: Record<string, any> = {}, cfg: AxiosRequestConfig = {}): Promise<D> {
        const { data } = await axios({
          baseURL,
          url,
          method: 'POST',
          data: payload,
          ...cfg,
        })

        return data
      },
    }
  }
}