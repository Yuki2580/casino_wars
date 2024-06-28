declare module '@alch/alchemy-sdk' {
  export class Network {
    static ETH_MAINNET: string;
  }
  export function initializeAlchemy(...args: any[]): any;
  export function getNftsForOwner(...args: any[]): any;
}
