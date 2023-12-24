import { decode, encode } from 'cbor-x';
import type { Adapter } from '../types';

const adapter: Adapter = {
  serialize: encode,
  deserialize: decode,
  string: true,
  json: true
};

export default adapter;
