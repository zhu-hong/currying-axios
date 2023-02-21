import type { AxiosInstance, AxiosRequestConfig } from 'axios'

declare function curryingAxios<D>(axios: AxiosInstance): (baseURL?: string) => {
  get(url?: string, payload?: Record<string, any>, cfg?: AxiosRequestConfig): Promise<D>;
  post(url?: string, payload?: Record<string, any>, cfg?: AxiosRequestConfig): Promise<D>;
}

export {
  curryingAxios,
}