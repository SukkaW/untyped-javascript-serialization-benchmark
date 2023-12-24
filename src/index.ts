import { deepStrictEqual } from 'assert';
import bser from './adapter/bser';
import bson from './adapter/bson';
import bsonfy from './adapter/bsonfy';
import cborX from './adapter/cbor-x';
import msgpack from './adapter/msgpack';
import msgpack_long_lite from './adapter/msgpack-long-lite';
import msgpackr from './adapter/msgpackr';
import native_json from './adapter/native-json';
import node_v8 from './adapter/node-v8';
import textencoder_textdecoder from './adapter/textencoder-textdecoder';

import { group, bench, run } from 'mitata';

import * as stringFixtures from './fixtures/string';
import * as jsonFixtures from './fixtures/json';

const adapters = {
  bser,
  bson,
  bsonfy,
  cborX,
  msgpack,
  msgpack_long_lite,
  msgpackr,
  native_json,
  node_v8,
  textencoder_textdecoder
};

const fixtures = {
  string: {
    small: stringFixtures.small,
    large: stringFixtures.large
  },
  json: {
    small: jsonFixtures.small,
    complex: jsonFixtures.complex,
    large: jsonFixtures.large
  }
};

type FixtureType = keyof typeof fixtures;

(async () => {
  Object.entries(adapters).forEach(([name, adapter]) => {
    Object.entries(fixtures).forEach(([fixtureType, fixtures]) => {
      if (!adapter[fixtureType as FixtureType]) return;
      Object.entries(fixtures).forEach(([fixtureName, fixture]) => {
        deepStrictEqual(adapter.deserialize(adapter.serialize(fixture)), fixture, `${name} ${fixtureType} ${fixtureName}`);
      });
    });
  });

  Object.entries(fixtures).forEach(([fixtureType, fixtures]) => {
    Object.entries(fixtures).forEach(([fixtureName, fixture]) => {
      group(`serialization - ${fixtureType} ${fixtureName}`, () => {
        Object.entries(adapters).forEach(([name, adapter]) => {
          if (!adapter[fixtureType as FixtureType]) return;
          bench(name, () => adapter.serialize(fixture));
        });
      });

      group(`deserialization - ${fixtureType} ${fixtureName}`, () => {
        Object.entries(adapters).forEach(([name, adapter]) => {
          if (!adapter[fixtureType as FixtureType]) return;
          const serialized = adapter.serialize(fixture);
          bench(name, () => adapter.deserialize(serialized));
        });
      });
    });
  });

  await run({
    avg: true,
    json: false,
    colors: true,
    min_max: true,
    collect: false,
    percentiles: true
  });
})();
