interface Window {
  ethereum?: {
    isMetaMask?: true;
    isInfinityWallet?: true;
    isOpera?: true;
    isCoinbaseWallet?: true;
    isTrust?: true;
    providers?: any[];
    request?: (...args: any[]) => Promise<void>;
  };
  BinanceChain?: {
    bnbSign?: (address: string, message: string) => Promise<{ publicKey: string; signature: string }>;
  };
}
