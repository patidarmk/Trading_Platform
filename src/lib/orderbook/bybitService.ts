import { useOrderbookStore } from '@/store/orderbookStore';

type OrderbookEntry = [string, string]; // [price, size]

const connections: Record<string, WebSocket> = {};

export const connectToBybit = (symbol: string) => {
  const wsUrl = 'wss://stream.bybit.com/v5/public/linear';

  if (
    connections[symbol] &&
    connections[symbol].readyState === WebSocket.OPEN
  ) {
    return;
  }

  const socket = new WebSocket(wsUrl);
  connections[symbol] = socket;

  socket.onopen = () => {
    const subscribeMsg = {
      op: 'subscribe',
      args: [`orderbook.50.${symbol}`], // top 50, filter later
    };
    socket.send(JSON.stringify(subscribeMsg));
    console.log(`[Bybit] Subscribed to ${symbol}`);
  };

  socket.onmessage = (event) => {
    const raw = JSON.parse(event.data);

    if (raw.type === 'snapshot' || raw.type === 'delta') {
      const bids = (raw.data.b || []).map(([p, q]: OrderbookEntry) => ({
        price: parseFloat(p),
        quantity: parseFloat(q),
      }));
      const asks = (raw.data.a || []).map(([p, q]: OrderbookEntry) => ({
        price: parseFloat(p),
        quantity: parseFloat(q),
      }));

      useOrderbookStore
        .getState()
        .setOrderbook('Bybit', symbol, bids.slice(0, 15), asks.slice(0, 15));
    }
  };

  socket.onerror = (err) => {
    console.error('[Bybit WS ERROR]', err);
  };

  socket.onclose = () => {
    console.warn(`[Bybit] Disconnected from ${symbol}`);
    delete connections[symbol];
  };
};

export const disconnectFromBybit = (symbol: string) => {
  const socket = connections[symbol];
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.close();
    delete connections[symbol];
  }
};
