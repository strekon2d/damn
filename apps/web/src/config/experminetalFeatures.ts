export enum EXPERIMENTAL_FEATURES {
  WebNotifications = 'web-notifications',
}
export type EnumValues<T> = T extends { [key: string]: infer U } ? U : never

export type FeatureKeys = EnumValues<typeof EXPERIMENTAL_FEATURES>[]

export const ctxKey = (key: EXPERIMENTAL_FEATURES) => `ctx-${key.toLowerCase()}`

export type FeatureRollOutConfig = {
  feature: EXPERIMENTAL_FEATURES
  percentage: number
  whitelist: string[]
}

export type ExperimentalFeatureConfigs = FeatureRollOutConfig[]

// Add new AB TESTS here aswell as their config
export const EXPERIMENTAL_FEATURE_CONFIGS: ExperimentalFeatureConfigs = [
  {
    feature: EXPERIMENTAL_FEATURES.WebNotifications,
    percentage: 0.05,
    whitelist: [],
  },
]
