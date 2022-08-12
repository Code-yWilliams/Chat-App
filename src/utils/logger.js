const info = (...args) => {
  if (process.env.NODE_ENV === 'test') return;
  console.log(...args);
}

const error = (...args) => {
  if (process.env.NODE_ENV === 'test') return;
  console.error(...args);
}

const log = {
  info,
  error,
}

export default log