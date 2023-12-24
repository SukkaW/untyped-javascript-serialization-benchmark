import type { Adapter } from '../types';

import { unpack, pack } from 'msgpackr';
const adapter: Adapter = {
  serialize: pack,
  deserialize: unpack,
  string: true,
  json: true
};

export default adapter;
