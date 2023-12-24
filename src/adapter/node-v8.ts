import type { Adapter } from '../types';

import v8 from 'node:v8';

const adapter: Adapter = {
  serialize: v8.serialize,
  deserialize: v8.deserialize,
  string: true,
  json: true
};

export default adapter;
