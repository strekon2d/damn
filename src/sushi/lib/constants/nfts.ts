import { Nft } from './types'

export const RABBIT_MINTING_FARM_ADDRESS = '0xC00162002a2f91F534beFc2db3106DbBED0fA611'
export const PANCAKE_RABBITS_ADDRESS = '0xD92320ccb53fa7f25bE1689De63e6b45D67D5b6b'

const Nfts: Nft[] = [
  {
    name: 'Swapsies',
    description: 'These bunnies love nothing more than swapping pancakes. Especially on BSC.',
    originalImage: 'https://picsum.photos/1000/1000?random=1',
    previewImage: 'swapsies-preview.png',
    blurImage: 'swapsies-blur.png',
    sortOrder: 999,
    bunnyId: 0,
  },
  {
    name: 'Drizzle',
    description: "It's raining syrup on this bunny, but he doesn't seem to mind. Can you blame him?",
    originalImage: 'https://picsum.photos/1000/1000?random=2',
    previewImage: 'drizzle-preview.png',
    blurImage: 'drizzle-blur.png',
    sortOrder: 999,
    bunnyId: 1,
  },
  {
    name: 'Blueberries',
    description: "These bunnies like their pancakes with blueberries. What's your favorite topping?",
    originalImage: 'https://picsum.photos/1000/1000?random=3',
    previewImage: 'blueberries-preview.png',
    blurImage: 'blueberries-blur.png',
    sortOrder: 999,
    bunnyId: 2,
  },
  {
    name: 'Circular',
    description: "Love makes the world go 'round... but so do pancakes. And these bunnies know it.",
    originalImage: 'https://picsum.photos/1000/1000?random=4',
    previewImage: 'circular-preview.png',
    blurImage: 'circular-blur.png',
    sortOrder: 999,
    bunnyId: 3,
  },
  {
    name: 'Sparkle',
    description: 'It’s sparkling syrup, pancakes, and even lottery tickets! This bunny really loves it.',
    originalImage: 'https://picsum.photos/1000/1000?random=5',
    previewImage: 'sparkle-preview.png',
    blurImage: 'sparkle-blur.png',
    sortOrder: 999,
    bunnyId: 4,
  },
]

export default Nfts
