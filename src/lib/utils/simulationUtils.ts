import { OrderLevel } from '@/store/orderbookStore';
import { SimulationFormValues } from '@/components/SimulationForm';

interface OrderbookSnapshot {
  bids: OrderLevel[];
  asks: OrderLevel[];
}

interface SimulationResult {
  filledQuantity: number;
  averageFillPrice: number;
  slippage: number; // percentage
  marketImpact: number;
  fillPercentage: number;
}

export function simulateOrderImpact(
  orderbook: OrderbookSnapshot,
  order: SimulationFormValues,
): SimulationResult {
  const { side, quantity, orderType, price: limitPrice } = order;

  const levels = side === 'Buy' ? orderbook.asks : orderbook.bids;
  const bookSide = side === 'Buy' ? 'asks' : 'bids';

  let remainingQty = quantity;
  let filledQty = 0;
  let cost = 0;

  for (const level of levels) {
    const levelPrice = level.price;
    const levelQty = level.quantity;

    // Market: take everything up to full quantity
    // Limit: stop if price worse than limit
    const limitReached =
      orderType === 'Limit' &&
      ((side === 'Buy' && levelPrice > (limitPrice ?? Infinity)) ||
        (side === 'Sell' && levelPrice < (limitPrice ?? 0)));

    if (limitReached) break;

    const tradeQty = Math.min(remainingQty, levelQty);
    cost += tradeQty * levelPrice;
    filledQty += tradeQty;
    remainingQty -= tradeQty;

    if (remainingQty <= 0) break;
  }

  const averageFillPrice = filledQty > 0 ? cost / filledQty : 0;
  const initialPrice = levels[0]?.price ?? 1;
  const slippage =
    filledQty > 0
      ? ((averageFillPrice - initialPrice) / initialPrice) * 100
      : 0;
  const marketImpact =
    filledQty > 0
      ? (levels[Math.min(5, levels.length - 1)]?.price - initialPrice) /
        initialPrice
      : 0;
  const fillPercentage = (filledQty / quantity) * 100;

  return {
    filledQuantity: filledQty,
    averageFillPrice,
    slippage,
    marketImpact,
    fillPercentage,
  };
}

export type OrderbookSide = [price: number, quantity: number][];

export function computeCumulativeOrders(
  orders: { price: number; quantity: number }[],
  type: 'bid' | 'ask',
) {
  let cumulative = 0;

  const sorted = [...orders].sort((a, b) =>
    type === 'bid' ? b.price - a.price : a.price - b.price,
  );

  return sorted.map((order) => {
    cumulative += order.quantity;
    return {
      ...order,
      total: cumulative,
    };
  });
}
