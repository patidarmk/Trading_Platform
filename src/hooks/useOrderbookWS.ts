// import { connectOKX, disconnectOKX } from '@/services/okxService';
// import { connectBybit, disconnectBybit } from '@/services/bybitService';
import { connectDeribit, disconnectDeribit } from '@/services/deribitService';

import { useEffect } from 'react';

export function useOrderbookWS(
  venue: 'OKX' | 'Bybit' | 'Deribit',
  symbol: string,
) {
  useEffect(() => {
    if (!symbol) return;

    // if (venue === 'OKX') connectOKX(symbol);
    // if (venue === 'Bybit') connectBybit(symbol);
    if (venue === 'Deribit') connectDeribit(symbol);

    return () => {
      // if (venue === 'OKX') disconnectOKX();
      // if (venue === 'Bybit') disconnectBybit();
      if (venue === 'Deribit') disconnectDeribit();
    };
  }, [venue, symbol]);
}
