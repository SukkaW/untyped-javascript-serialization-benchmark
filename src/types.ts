export interface Adapter {
  serialize: (data: any) => Uint8Array,
  deserialize: (data: Uint8Array) => any,
  string: boolean,
  json: boolean
}
