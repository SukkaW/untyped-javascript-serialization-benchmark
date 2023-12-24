import type { Adapter } from '../types';

const encoder = new TextEncoder();
const decoder = new TextDecoder();

const serialize = (data: any): Uint8Array => encoder.encode(JSON.stringify(data));
const deserialize = (bytes: Uint8Array): string => JSON.parse(decoder.decode(bytes));

const adapter: Adapter = {
  serialize,
  deserialize,
  string: true,
  json: true
};

export default adapter;
