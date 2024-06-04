import { createConfig, http } from "wagmi";

import { mainnet, scrollSepolia, avalancheFuji } from "wagmi/chains";

export const config = createConfig({
  chains: [mainnet, scrollSepolia, avalancheFuji],

  ssr: true,
  // multiInjectedProviderDiscovery: false,
  transports: {
    [mainnet.id]: http(),
    [scrollSepolia.id]: http(),
    [avalancheFuji.id]: http(),
  },
});
