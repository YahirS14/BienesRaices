export function getBackgroundImage(imageFormats) {
  const userAgent = window.navigator.userAgent;
  const supportedFormats = ['avif', 'webp', 'jpg'];

  for (const format of supportedFormats) {
    if (userAgent.includes(`image/${format}`)) {
      return `src/img/${format}`;
    }
  }

  return `src/img/header.jpg`;
}
