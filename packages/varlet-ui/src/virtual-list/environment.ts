// Keep the bundler-recognized expression without requiring Node types in consumers.
declare const process: { env: { NODE_ENV?: string } }

export function isDevelopment(): boolean {
  try {
    return process.env.NODE_ENV !== 'production'
  } catch {
    // Unbundled browsers and runtimes without process have no development marker.
    return false
  }
}
