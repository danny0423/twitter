type DeepReadonly<T> = T extends object ? [K in keyof T]<DeepReadonly<T>> :  T


type DeepReadonly<T> = T extends object
  ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
  : T

// 測試
type User = {
  name: string
  address: {
    city: string
    zip: number
  }
}

type ReadonlyUser = DeepReadonly<User>

// 應該要讓這行報錯：
const user: ReadonlyUser = { name: 'Danny', address: { city: 'Taipei', zip: 220 } }
user.address.city = 'Tainan'  // ❌ 應該報錯