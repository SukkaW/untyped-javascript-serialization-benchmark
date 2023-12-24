import type { Adapter } from '../types';

import { BSON } from 'bsonfy';

const adapter: Adapter = {
  serialize: BSON.serialize,
  deserialize: BSON.deserialize,
  string: false,
  json: true
};

export default adapter;
