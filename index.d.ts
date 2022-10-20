import type { AxiosInstance, AxiosRequestConfig } from 'axios'

declare function curryingAxios<D>(axios: AxiosInstance): (baseURL?: string) => {
  get(url?: string, args?: Record<string, any>, cfg?: AxiosRequestConfig): Promise<D>;
  post(url?: string, args?: Record<string, any>, cfg?: AxiosRequestConfig): Promise<D>;
}

export {
  curryingAxios,
}