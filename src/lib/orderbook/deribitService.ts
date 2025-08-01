import { computeCumulativeOrders } from '../utils/simulationUtils';
import { useOrderbookStore } from '@/store/orderbookStore';

const connections: Record<string, WebSocket> = {};

export const connectToDeribit = (symbol: string) => {
  const wsUrl = 'wss://www.deribit.com/ws/api/v2';

  if (
    connections[symbol] &&
    connections[symbol].readyState === WebSocket.OPEN
  ) {
    return;
  }

  const socket = new WebSocket(wsUrl);
  connections[symbol] = socket;

  socket.onopen = () => {
    const msg = {
      jsonrpc: '2.0',
      method: 'public/subscribe',
      id: 42,
      params: {
        channels: [`book.${symbol}.none.10.100ms`], // Top 10 levels, 100ms updates
      },
    };
    socket.send(JSON.stringify(msg));
    console.log(`[Deribit] Subscribed to ${symbol}`);
  };

  socket.onmessage = (event) => {
    const raw = JSON.parse(event.data);
    if (!raw.params || !raw.params.data) return;

    const data = raw.params.data;
    const bids = (data.bids || []).map(
      ([price, quantity]: [number, number]) => ({
        price,
        quantity,
      }),
    );
    const asks = (data.asks || []).map(
      ([price, quantity]: [number, number]) => ({
        price,
        quantity,
      }),
    );

    // 👇 Compute cumulative totals
    const bidsWithTotal = computeCumulativeOrders(bids, 'bid');
    const asksWithTotal = computeCumulativeOrders(asks, 'ask');

    useOrderbookStore
      .getState()
      .setOrderbook(
        'Deribit',
        symbol,
        bidsWithTotal.slice(0, 15),
        asksWithTotal.slice(0, 15),
      );
  };

  socket.onerror = (err) => {
    console.error('[Deribit WS ERROR]', err);
  };

  socket.onclose = () => {
    console.warn(`[Deribit] Disconnected from ${symbol}`);
    delete connections[symbol];
  };
};

export const disconnectFromDeribit = (symbol: string) => {
  const socket = connections[symbol];
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.close();
    delete connections[symbol];
  }
};
