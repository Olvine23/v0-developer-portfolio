import Image from "next/image"

/**
 * Renders an image uncropped (object-contain) over a blurred, scaled-up copy
 * of itself filling the frame — so a project screenshot of any aspect ratio
 * (tall mobile capture, wide desktop capture) sits cleanly in a fixed-shape
 * container without cropping real content or leaving hard letterbox bars.
 *
 * Expects to be dropped into an already-positioned container
 * (`relative overflow-hidden`, sized via aspect-ratio or fill) — this only
 * renders the layered image content, not the container itself, so callers
 * keep control of the box (aspect ratio, view-transition names, refs, etc).
 */
export function FramedImage({
  src,
  alt,
  priority,
  onLoad,
}: {
  src: string
  alt: string
  priority?: boolean
  onLoad?: () => void
}) {
  return (
    <>
      <Image
        src={src}
        alt=""
        fill
        aria-hidden
        className="scale-110 object-cover object-center blur-2xl opacity-50"
      />
      <div className="absolute inset-0 bg-background/40" />
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-contain"
        onLoad={onLoad}
      />
    </>
  )
}
