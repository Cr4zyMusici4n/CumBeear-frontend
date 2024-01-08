export const useImageUrl = (image: string): string | undefined => {
  const assets = import.meta.glob('~/assets/images/**/*', { eager: true, import: 'default' })
  // @ts-expect-error: wrong type info
  const imageUrl: string | undefined = assets['/assets/images/' + image]
  if (imageUrl === undefined) {
    throw showError({ statusCode: 500, message: `Image ${image} not found` })
    return undefined
  } else return imageUrl
}
