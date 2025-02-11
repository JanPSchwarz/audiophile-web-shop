// specific for images from storybok with format:
// example base filename which format doesn't change:
// https://a.storyblok.com/f/324015/1440x729/cb8f2a7bb9/image-hero.jpg

export default function getImageRatio(image) {
  const { filename } = image;

  const sizesArray = filename?.split("/")[5].split("x").join("/");

  return sizesArray;
}
