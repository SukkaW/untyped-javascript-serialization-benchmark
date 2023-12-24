import { loadFromBuffer, dumpToBuffer } from 'bser';
import type { Adapter } from '../types';

const adapter: Adapter = {
  serialize: dumpToBuffer,
  deserialize: loadFromBuffer,
  string: true,
  json: true
};

export default adapter;
