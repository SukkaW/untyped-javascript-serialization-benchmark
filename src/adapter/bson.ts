import type { Adapter } from '../types';

import { BSON } from 'bson';

const adapter: Adapter = {
  serialize: BSON.serialize,
  deserialize: BSON.deserialize,
  string: false,
  json: true
};

export default adapter;
