## 基于`axios`二次封装的网络请求工具
1. 利用`柯里化`的优雅`axios`二次封装
2. 完整的`TS`类型支持

## 安装
```
pnpm add axios currying-axios
```

## 注意

默认已将`axios`响应的`data`解构出

## 示例

```typescript
import { curryingAxios } from 'currying-axios'
import axios from 'axios'

const Basic = axios.create({
  // your config
})

Basic.interceptors.request.use((config) => {
  // your config

  return config
})

Basic.interceptors.response.use((response) => {
  // your config

  return response
})


const basic = curryingAxios(Basic) // 传入axios实例或者直接传入axios


// 返回一个带有post和get方法的对象,共用传入axios的错误处理逻辑和请求/响应拦截规则
const qr = basic('localhost:3000/qrcode') // 传入BaseURL
const om = basic('localhost:3000/org-manager') // 传入BaseURL

// 已将 axios data 解构出
const data = await qr.get('/info', { id: 'ctrap' }, {
  onDownloadProgress() {},
})
const data = await om.post('/create', { name: 'cxk' }, {
  onUploadProgress() {},
})
```