import getPlaceholder from "./getPlaceholder";

export default async function extractSourcesWithPlaceholders(image) {
  function extractImage(image, index, device) {
    return image?.[index]?.[device]?.[0].image;
  }

  const devices = ["mobile", "tablet", "desktop"];

  const sources = devices.map((device, index) =>
    extractImage(image, index, device),
  );

  const sourcesWithPlaceholder = sources.map(async (image) => ({
    ...image,
    blurData: await getPlaceholder(image.filename),
  }));

  const resolvedPromises = await Promise.all(sourcesWithPlaceholder);

  return resolvedPromises;
}

// function adds blurData to objects 

// example object to parse to function:
// [
//     {
//       _uid: '412fbed2-332a-4e26-8fd1-f1ff3232501b',
//       mobile: [ [Object] ],
//       component: 'mobile',
//       _editable: '<!--#storyblok#{"name": "mobile", "space": "324015", "uid": "412fbed2-332a-4e26-8fd1-f1ff3232501b", "id": "620164889"}-->'
//     },
//     {
//       _uid: '1b02e885-0951-4679-b132-062b6a2ad78f',
//       tablet: [ [Object] ],
//       component: 'tablet',
//       _editable: '<!--#storyblok#{"name": "tablet", "space": "324015", "uid": "1b02e885-0951-4679-b132-062b6a2ad78f", "id": "620164889"}-->'
//     },
//     {
//       _uid: 'd33492b1-5144-46c9-9aa8-65e18c272434',
//       desktop: [ [Object] ],
//       component: 'desktop',
//       _editable: '<!--#storyblok#{"name": "desktop", "space": "324015", "uid": "d33492b1-5144-46c9-9aa8-65e18c272434", "id": "620164889"}-->'
//     }
//   ]

//
// OUTPUT:

// [
//     {
//       id: 20754181,
//       alt: '',
//       name: '',
//       focus: '',
//       title: '',
//       source: '',
//       filename: 'https://a.storyblok.com/f/324015/654x240/ac1f78110f/image-xx99-mark-one-headphones.jpg',
//       copyright: '',
//       fieldtype: 'asset',
//       meta_data: {},
//       is_external_url: false,
//       blurData: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAzklEQVR4nGN4gwO8e/fuytWrp06dfvfu3du3b7GqYcAUev369cePH/ftO3D06NG0tMywsMh3794Rpfn169fv3r17+PBhUVHZy5cvnz55IikpvWLFql+/fr18+ZIozffvPzAyNjY1Nb146XJuXn5//4T///+9ePGCKGd//vzJ1dlGkJ+VgZFTVl7xxIkTnz9/JmzzmzdvXr58+fvXr/6eVhZmBgYGBjd3T0h4vX79mrDmN2/evH379tnTZ4sXL962bduLFy8+fPiAqfPNmzcAUPRebGGFdpsAAAAASUVORK5CYII='
//     },
//     {
//       id: 20754190,
//       alt: '',
//       name: '',
//       focus: '',
//       title: '',
//       source: '',
//       filename: 'https://a.storyblok.com/f/324015/446x636/b33bfca6cf/image-xx99-mark-one-headphones.jpg',
//       copyright: '',
//       fieldtype: 'asset',
//       meta_data: {},
//       is_external_url: false,
//       blurData: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAUCAIAAAAyZ5t7AAAACXBIWXMAAAsTAAALEwEAmpwYAAACCElEQVR4nKXS30tTYRgH8CeIoshMZGr+KNEWdWyz0lYsCeum3zrKDQJztbqoUFZCQdf2Hxi4CEovSolgMKNisWHRIZHaVcI4HBl0MXbe83Z4z3k57d0ZOyc2hpNYFPi9ei4+PDwv7xeU/w6si5JS/kEJIZRSSZLS6TRC6A8Pq5OqEoTQp8/82/cf+C+Li0tfxZWVKpQQkslI82/eJRKJyHzk9ujogGdoLHjvWyKhaVqFYowZY+FwJBR6kkqlFOVnNBp1u/u21tReHvKWLimeUt5KKfX7A5OTj/P5vISQaZrxeLyjcw9s2PTqddgwchjjItV1XRCE5pZdCwsfLcvUdV2SJMs0JyYeAUDw7rhlWbIsFymlVBCE/dyB+w8een1Xpmdm1FJEUdxRZxu+eq1CdV3/vrzc2NhcswXqbU3u4/1ToaemaTLGXEePjfivV6hS0p127vSp7vHgcL2ttaf3yIWLnr4TJw/3uJ49ny4UCmWKMc4bbOzODQC4NXKmvX130842ANi4uXZg0MvzfDb7q/wsRVE0TV2KTgGAz3f+3Nn+1rYOrsvhcB7iuhzJZJJSuvYLVDnzo9vpcLvse+32hoYWANi2ve7Fy1nGGMa4QjHGWWbMzc1y3D7nwd5Bz6VA4GYsFsvlctXromlUEESEkGEYlmWt7qteQko1QogsywihtW7d1f4b/Q1xioOBsChuVgAAAABJRU5ErkJggg=='
//     },
//     {
//       id: 20754172,
//       alt: '',
//       name: '',
//       focus: '',
//       title: '',
//       source: '',
//       filename: 'https://a.storyblok.com/f/324015/700x636/e226ee3cc3/image-xx99-mark-one-headphones.jpg',
//       copyright: '',
//       fieldtype: 'asset',
//       meta_data: {},
//       is_external_url: false,
//       blurData: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAIAAADUsmlHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB7klEQVR4nKWTTWgTQRSAHwFrUxSbVhsxolhsMQbF2oJXD8VuRUQR1INXLTlUqOkhCOZWW9vgKYdSCfFQ7dmTiroG68EeYyIh9SK1kWWH2ZnNzO520pCVRIS67KaWftf3Pt4P74G2C6BFDP9lZzLGmFLKGaOUELKTyhhjxtjP9fV84duPtbVy+Zemkf+SMca6rucLBflj9uXS0tT0k5nZ5PsPsmsD4DArrLK6+n3hWTqfLxSLxXg8fiR0/PSZgTdv3xmG4Zj/HxkhVK1W0+nnExMPNI3oum6aZiwWA4DLV65SSrepLMTGiCRNPZ62bZtSquu6qqoD54fAtzeX+8o531rcKRuGMSKN3rx9595YdHHxBSG0Xq+nUikAWF7+bFkWQshT5pwPD48CQKC76+y5wXQmU6vVZFnuDBz8srJimqanrKqqbdt3x8aDPfsm79/ytwdOhSMnek/29YevXb+hKAohxLNthJBpWq9fZRobunQhHO7b034AAEJHe6PRcc5Zq203YqSilXOR/mNDgxFJuth9KBQ8HPJ3dM7NJYUQW3t2ORKEkKhuJhKJYJevrW0/+DrA53/4KME4d2S6XphGCVEUJZl8Oj+/kM1+KpVKlmU5pnWX/0AI2WwihGCsMarrb3m+pNoENfHKafXP2/IbnrZ0yKw+lQUAAAAASUVORK5CYII='
//     }
//   ]
