export function isProd() {
  return process.env.NODE_ENV === 'production'
}

export function isDev() {
  return process.env.NODE_ENV === 'development'
}

export function setDev() {
  process.env.NODE_ENV = 'development'
}

export function setProd() {
  process.env.NODE_ENV = 'production'
}
