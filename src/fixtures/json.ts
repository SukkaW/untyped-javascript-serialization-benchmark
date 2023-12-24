export const small = {
  hello: 'world',
};

export const complex = {
  string: 'hello world',
  number: 123,
  boolean: true,
  array: [1, 2, 3],
  object: {
    a: 1,
    b: 2,
    c: 3,
    boolean: false
  },
  // uint8array: new Uint8Array([1, 2, 3])
}

export const large = {
  string: 'hello world sukka'.repeat(100),
  number: 123456789,
  boolean: true,
  array: [...Array(100).keys()].map(n => n * 10),
  object: Object.fromEntries([...Array(100).keys()].map(n => [n, n * 10])),
  // uint8array: new Uint8Array([...Array(100).keys()].map(n => n ** 10))
}
