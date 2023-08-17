export type ProviderQoute = {
  providerFee: number
  networkFee: number
  amount: number
  quote: number
  fiatCurrency: string
  cryptoCurrency: string
  provider: string
  price?: number
}

export enum CryptoFormView {
  Input,
  Quote,
}
