import type { Adapter } from '../types';

import { encode, decode } from 'msgpack-long-lite';
const adapter: Adapter = {
  serialize: encode,
  deserialize: decode,
  string: true,
  json: true
};

export default adapter;
