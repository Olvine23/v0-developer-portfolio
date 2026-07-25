import { getStore } from "@netlify/blobs"

export function contentStore() {
  return getStore("content")
}

export function screenshotsStore() {
  return getStore("screenshots")
}
