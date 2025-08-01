import { useOrderbookStore } from '@/store/orderbookStore';

type WSMessage = {
  arg: {
    instId: string;
  };
  data: {
    asks: string[][];
    bids: string[][];
  }[];
};

const connections: Record<string, WebSocket> = {};

export const connectToOKX = (symbol: string) => {
  const wsUrl = 'wss://ws.okx.com:8443/ws/v5/public';

  // If already connected to this symbol, skip
  if (
    connections[symbol] &&
    connections[symbol].readyState === WebSocket.OPEN
  ) {
    return;
  }

  const socket = new WebSocket(wsUrl);
  connections[symbol] = socket;

  socket.onopen = () => {
    const subMsg = {
      op: 'subscribe',
      args: [
        {
          channel: 'books5',
          instId: symbol,
        },
      ],
    };
    socket.send(JSON.stringify(subMsg));
    console.log(`[OKX] Subscribed to ${symbol}`);
  };

  socket.onmessage = (event) => {
    try {
      const message: WSMessage = JSON.parse(event.data);

      if (message.data) {
        const [update] = message.data;
        const bids = update.bids.map(([p, q]) => ({
          price: parseFloat(p),
          quantity: parseFloat(q),
        }));
        const asks = update.asks.map(([p, q]) => ({
          price: parseFloat(p),
          quantity: parseFloat(q),
        }));

        useOrderbookStore.getState().setOrderbook('OKX', symbol, bids, asks);
      }
    } catch (err) {
      console.error('[OKX] JSON parse error:', err);
    }
  };

  socket.onerror = (err) => {
    console.error('[OKX WS ERROR]', err);
  };

  socket.onclose = () => {
    console.warn(`[OKX] Disconnected from ${symbol}`);
    delete connections[symbol];
  };
};

export const disconnectFromOKX = (symbol: string) => {
  const socket = connections[symbol];
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.close();
    delete connections[symbol];
  }
};
