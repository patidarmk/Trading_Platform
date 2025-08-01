import { OrderLevel, useOrderbookStore } from '@/store/orderbookStore';

let socket: WebSocket | null = null;

export function connectDeribit(symbol: string) {
  if (socket) {
    socket.close();
    socket = null;
  }

  socket = new WebSocket('wss://www.deribit.com/ws/api/v2');

  socket.onopen = () => {
    const subscribeMsg = JSON.stringify({
      jsonrpc: '2.0',
      method: 'public/subscribe',
      params: {
        channels: [`book.${symbol}.none.25.100ms`], // Example: book.BTC-PERPETUAL.none.25.100ms
      },
      id: 1,
    });
    socket?.send(subscribeMsg);
  };

  socket.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.method === 'subscription') {
      const data = msg.params.data;
      if (!data) return;

      const bids: OrderLevel[] = [];
      const asks: OrderLevel[] = [];

      data.bids.forEach(([price, quantity]: [number, number]) => {
        bids.push({ price, quantity });
      });
      data.asks.forEach(([price, quantity]: [number, number]) => {
        asks.push({ price, quantity });
      });

      // Sort bids descending, asks ascending
      bids.sort((a, b) => b.price - a.price);
      asks.sort((a, b) => a.price - b.price);

      useOrderbookStore.getState().setOrderbook('Deribit', symbol, bids, asks);
    }
  };

  socket.onclose = () => {
    console.log('Deribit WebSocket closed');
  };

  socket.onerror = (err) => {
    console.error('Deribit WebSocket error', err);
  };
}

export function disconnectDeribit() {
  if (socket) {
    socket.close();
    socket = null;
  }
}
