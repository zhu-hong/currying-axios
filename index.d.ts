import type { AxiosInstance, AxiosRequestConfig } from 'axios'

declare function curryingAxios(axios: AxiosInstance): (baseURL?: string) => {
  get(url?: string, args?: Record<string, any>, cfg?: AxiosRequestConfig): Promise<any>;
  post(url?: string, args?: Record<string, any>, cfg?: AxiosRequestConfig): Promise<any>;
}

export {
  curryingAxios,
}