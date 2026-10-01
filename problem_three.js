function deepFreeze(obj, seen = new WeakSet()) {
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) return obj;
  if (seen.has(obj)) return obj;

  seen.add(obj);
  Object.freeze(obj);

  for (const key of Reflect.ownKeys(obj)) {
    deepFreeze(obj[key], seen);
  }

  return obj;
}


const config = deepFreeze({ api: { baseUrl: 'https://x.com', retries: 3 }, debug: false })
config.api.baseUrl = 'https://changed.com' // should be ignored
config.debug = true                        // should be ignored
console.log(config.api.baseUrl, config.debug) // "https://x.com" false
console.log(Object.isFrozen(config.api))       