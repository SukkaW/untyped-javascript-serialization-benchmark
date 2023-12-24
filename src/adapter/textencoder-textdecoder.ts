import type { Adapter } from '../types';

const encoder = new TextEncoder();
const decoder = new TextDecoder();

const serialize = (str: string): Uint8Array => encoder.encode(str);
const deserialize = (bytes: Uint8Array): string => decoder.decode(bytes);

const adapter: Adapter = {
  serialize,
  deserialize,
  string: true,
  json: false
};

export default adapter;
