export const getImageURLScrum = imageName => {
    return new URL(`../assets/${imageName}`, import.meta.url).href;
  };