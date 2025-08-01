import { create } from 'zustand';

export type OrderLevel = {
  price: number;
  quantity: number;
  total?: number; // computed cumulative sum (optional)
};

export type Venue = 'OKX' | 'Bybit' | 'Deribit';

type OrderbookData = {
  bids: OrderLevel[];
  asks: OrderLevel[];
  lastUpdated: number;
};

type OrderbookStore = {
  data: Record<Venue, Record<string, OrderbookData>>;
  setOrderbook: (
    venue: Venue,
    symbol: string,
    bids: OrderLevel[],
    asks: OrderLevel[],
  ) => void;

  getOrderbook: (venue: Venue, symbol: string) => OrderbookData | undefined;
};

export const useOrderbookStore = create<OrderbookStore>((set, get) => ({
  data: {
    OKX: {},
    Bybit: {},
    Deribit: {},
  },

  setOrderbook: (
    venue: Venue,
    symbol: string,
    bids: OrderLevel[],
    asks: OrderLevel[],
  ) => {
    set((state: OrderbookStore) => ({
      data: {
        ...state.data,
        [venue]: {
          ...state.data[venue],
          [symbol]: {
            bids,
            asks,
            lastUpdated: Date.now(),
          },
        },
      },
    }));
  },

  getOrderbook: (venue: Venue, symbol: string) => {
    return get().data[venue]?.[symbol];
  },
}));
