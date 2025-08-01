// // // // 'use client';

// // // // import SimulationForm, {
// // // //   SimulationFormValues,
// // // // } from '@/components/SimulationForm';
// // // // import {
// // // //   connectToBybit,
// // // //   disconnectFromBybit,
// // // // } from '@/lib/orderbook/bybitService';
// // // // import {
// // // //   connectToDeribit,
// // // //   disconnectFromDeribit,
// // // // } from '@/lib/orderbook/deribitService';
// // // // import { connectToOKX, disconnectFromOKX } from '@/lib/orderbook/okxService';
// // // // import { useEffect, useState } from 'react';

// // // // import OrderbookViewer from '@/components/OrderbookViewer';
// // // // import { useOrderbookStore } from '@/store/orderbookStore';

// // // // const symbols = {
// // // //   OKX: 'BTC-USDT',
// // // //   Bybit: 'BTCUSDT',
// // // //   Deribit: 'BTC-PERPETUAL',
// // // // } as const;

// // // // export default function Home() {
// // // //   const [venue, setVenue] = useState<'OKX' | 'Bybit' | 'Deribit'>('OKX');
// // // //   const [simulatedOrder, setSimulatedOrder] = useState<SimulationFormValues>();
// // // //   const symbol = symbols[venue];
// // // //   const orderbook = useOrderbookStore((s) => s.data[venue]?.[symbol]);

// // // //   useEffect(() => {
// // // //     if (venue === 'OKX') connectToOKX(symbol);
// // // //     if (venue === 'Bybit') connectToBybit(symbol);
// // // //     if (venue === 'Deribit') connectToDeribit(symbol);

// // // //     return () => {
// // // //       if (venue === 'OKX') disconnectFromOKX(symbol);
// // // //       if (venue === 'Bybit') disconnectFromBybit(symbol);
// // // //       if (venue === 'Deribit') disconnectFromDeribit(symbol);
// // // //     };
// // // //   }, [venue, symbol]);

// // // //   const handleSubmit = (data: SimulationFormValues) => {
// // // //     setVenue(data.venue);
// // // //     setSimulatedOrder(data);
// // // //   };

// // // //   return (
// // // //     <main className="bg-gray-900 min-h-screen text-white p-6">
// // // //       <div className="max-w-7xl mx-auto space-y-6">
// // // //         <header className="flex flex-col md:flex-row md:items-center justify-between">
// // // //           <h1 className="text-2xl font-bold">
// // // //             📊 Real-Time Orderbook Simulator
// // // //           </h1>
// // // //           <div className="mt-4 md:mt-0">
// // // //             <label className="mr-2 font-semibold">Venue:</label>
// // // //             <select
// // // //               value={venue}
// // // //               onChange={(e) =>
// // // //                 setVenue(e.target.value as 'OKX' | 'Bybit' | 'Deribit')
// // // //               }
// // // //               className="bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded"
// // // //             >
// // // //               <option value="OKX">OKX</option>
// // // //               <option value="Bybit">Bybit</option>
// // // //               <option value="Deribit">Deribit</option>
// // // //             </select>
// // // //           </div>
// // // //         </header>

// // // //         <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // //           {/* Raw Bids and Asks View */}
// // // //           <div className="bg-gray-800 p-4 rounded-lg shadow-md">
// // // //             <h2 className="text-lg font-semibold text-green-400 mb-2">
// // // //               📘 Bids ({symbol})
// // // //             </h2>
// // // //             <div className="text-sm max-h-96 overflow-y-auto space-y-1">
// // // //               {orderbook?.bids?.slice(0, 15).map((b, i) => (
// // // //                 <div key={i} className="text-green-300">
// // // //                   {b.price.toFixed(2)} × {b.quantity}
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>

// // // //           <div className="bg-gray-800 p-4 rounded-lg shadow-md">
// // // //             <h2 className="text-lg font-semibold text-red-400 mb-2">
// // // //               📕 Asks ({symbol})
// // // //             </h2>
// // // //             <div className="text-sm max-h-96 overflow-y-auto space-y-1">
// // // //               {orderbook?.asks?.slice(0, 15).map((a, i) => (
// // // //                 <div key={i} className="text-red-300">
// // // //                   {a.price.toFixed(2)} × {a.quantity}
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </section>

// // // //         {/* Simulation Form */}
// // // //         <section className="bg-gray-800 p-6 rounded-lg shadow-md">
// // // //           <h2 className="text-xl font-semibold mb-4 text-indigo-400">
// // // //             🧪 Simulate Order Placement
// // // //           </h2>
// // // //           <SimulationForm onSubmitSim={handleSubmit} />
// // // //         </section>

// // // //         {/* Visual Simulation Viewer */}
// // // //         {simulatedOrder && (
// // // //           <section className="bg-gray-800 p-6 rounded-lg shadow-md">
// // // //             <h2 className="text-xl font-semibold mb-4 text-yellow-400">
// // // //               📍 Simulation Visualization
// // // //             </h2>
// // // //             <OrderbookViewer
// // // //               venue={simulatedOrder.venue}
// // // //               symbol={simulatedOrder.symbol}
// // // //               simulatedOrder={simulatedOrder}
// // // //             />
// // // //           </section>
// // // //         )}
// // // //       </div>
// // // //     </main>
// // // //   );
// // // // }

// // // 'use client';

// // // import SimulationForm, {
// // //   SimulationFormValues,
// // // } from '@/components/SimulationForm';
// // // import {
// // //   connectToBybit,
// // //   disconnectFromBybit,
// // // } from '@/lib/orderbook/bybitService';
// // // import {
// // //   connectToDeribit,
// // //   disconnectFromDeribit,
// // // } from '@/lib/orderbook/deribitService';
// // // import { connectToOKX, disconnectFromOKX } from '@/lib/orderbook/okxService';
// // // import { useEffect, useState } from 'react';

// // // import OrderbookViewer from '@/components/OrderbookViewer';
// // // import { useOrderbookStore } from '@/store/orderbookStore';

// // // const symbols = {
// // //   OKX: 'BTC-USDT',
// // //   Bybit: 'BTCUSDT',
// // //   Deribit: 'BTC-PERPETUAL',
// // // } as const;

// // // export default function Home() {
// // //   const [venue, setVenue] = useState<'OKX' | 'Bybit' | 'Deribit'>('OKX');
// // //   const [simulatedOrder, setSimulatedOrder] = useState<SimulationFormValues>();
// // //   const symbol = symbols[venue];
// // //   const orderbook = useOrderbookStore((s) => s.data[venue]?.[symbol]);

// // //   useEffect(() => {
// // //     if (venue === 'OKX') connectToOKX(symbol);
// // //     if (venue === 'Bybit') connectToBybit(symbol);
// // //     if (venue === 'Deribit') connectToDeribit(symbol);

// // //     return () => {
// // //       if (venue === 'OKX') disconnectFromOKX(symbol);
// // //       if (venue === 'Bybit') disconnectFromBybit(symbol);
// // //       if (venue === 'Deribit') disconnectFromDeribit(symbol);
// // //     };
// // //   }, [venue, symbol]);

// // //   const handleSubmit = (data: SimulationFormValues) => {
// // //     setVenue(data.venue);
// // //     setSimulatedOrder(data);
// // //   };

// // //   return (
// // //     <main className="bg-gray-950 min-h-screen text-white px-4 md:px-6 py-8">
// // //       <div className="max-w-7xl mx-auto space-y-10">
// // //         {/* Header */}
// // //         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
// // //           <h1 className="text-3xl font-bold text-white">
// // //             📊 Real-Time Orderbook Simulator
// // //           </h1>
// // //           <div className="flex items-center gap-3">
// // //             <label className="text-sm font-medium text-gray-300">Venue:</label>
// // //             <select
// // //               value={venue}
// // //               onChange={(e) =>
// // //                 setVenue(e.target.value as 'OKX' | 'Bybit' | 'Deribit')
// // //               }
// // //               className="bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded-md text-sm"
// // //             >
// // //               <option value="OKX">OKX</option>
// // //               <option value="Bybit">Bybit</option>
// // //               <option value="Deribit">Deribit</option>
// // //             </select>
// // //           </div>
// // //         </div>

// // //         {/* Orderbook Bids and Asks */}
// // //         <section className="grid md:grid-cols-2 gap-6">
// // //           <div className="bg-gray-900 p-5 rounded-xl shadow-md border border-gray-800">
// // //             <h2 className="text-lg font-semibold text-green-400 mb-4">
// // //               📘 Top 15 Bids — {symbol}
// // //             </h2>
// // //             <div className="max-h-96 overflow-y-auto space-y-1 text-sm">
// // //               {orderbook?.bids?.slice(0, 15).map((b, i) => (
// // //                 <div key={i} className="text-green-300">
// // //                   {b.price.toFixed(2)} × {b.quantity}
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           <div className="bg-gray-900 p-5 rounded-xl shadow-md border border-gray-800">
// // //             <h2 className="text-lg font-semibold text-red-400 mb-4">
// // //               📕 Top 15 Asks — {symbol}
// // //             </h2>
// // //             <div className="max-h-96 overflow-y-auto space-y-1 text-sm">
// // //               {orderbook?.asks?.slice(0, 15).map((a, i) => (
// // //                 <div key={i} className="text-red-300">
// // //                   {a.price.toFixed(2)} × {a.quantity}
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* Simulation Form */}
// // //         <section className="bg-gray-900 p-6 rounded-xl shadow border border-gray-800">
// // //           <h2 className="text-xl font-semibold mb-4 text-indigo-400">
// // //             🧪 Simulate Order Placement
// // //           </h2>
// // //           <SimulationForm onSubmitSim={handleSubmit} />
// // //         </section>

// // //         {/* Simulation Result */}
// // //         {simulatedOrder && (
// // //           <section className="bg-gray-900 p-6 rounded-xl shadow border border-gray-800">
// // //             <h2 className="text-xl font-semibold mb-4 text-yellow-400">
// // //               📍 Simulation Visualization
// // //             </h2>
// // //             <OrderbookViewer
// // //               venue={simulatedOrder.venue}
// // //               symbol={simulatedOrder.symbol}
// // //               simulatedOrder={simulatedOrder}
// // //             />
// // //           </section>
// // //         )}
// // //       </div>
// // //     </main>
// // //   );
// // // }

// // 'use client';

// // import SimulationForm, {
// //   SimulationFormValues,
// // } from '@/components/SimulationForm';
// // import {
// //   connectToBybit,
// //   disconnectFromBybit,
// // } from '@/lib/orderbook/bybitService';
// // import {
// //   connectToDeribit,
// //   disconnectFromDeribit,
// // } from '@/lib/orderbook/deribitService';
// // import { connectToOKX, disconnectFromOKX } from '@/lib/orderbook/okxService';
// // import { useEffect, useState } from 'react';

// // import OrderbookViewer from '@/components/OrderbookViewer';
// // import { useOrderbookStore } from '@/store/orderbookStore';

// // const symbols = {
// //   OKX: 'BTC-USDT',
// //   Bybit: 'BTCUSDT',
// //   Deribit: 'BTC-PERPETUAL',
// // } as const;

// // export default function Home() {
// //   const [venue, setVenue] = useState<'OKX' | 'Bybit' | 'Deribit'>('OKX');
// //   const [simulatedOrder, setSimulatedOrder] = useState<SimulationFormValues>();
// //   const symbol = symbols[venue];
// //   const orderbook = useOrderbookStore((s) => s.data[venue]?.[symbol]);

// //   useEffect(() => {
// //     if (venue === 'OKX') connectToOKX(symbol);
// //     if (venue === 'Bybit') connectToBybit(symbol);
// //     if (venue === 'Deribit') connectToDeribit(symbol);

// //     return () => {
// //       if (venue === 'OKX') disconnectFromOKX(symbol);
// //       if (venue === 'Bybit') disconnectFromBybit(symbol);
// //       if (venue === 'Deribit') disconnectFromDeribit(symbol);
// //     };
// //   }, [venue, symbol]);

// //   const handleSubmit = (data: SimulationFormValues) => {
// //     setVenue(data.venue);
// //     setSimulatedOrder(data);
// //   };

// //   return (
// //     <main className="bg-gray-950 min-h-screen text-white px-6 py-10">
// //       <div className="max-w-7xl mx-auto space-y-10">
// //         <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
// //           <h1 className="text-3xl font-bold text-white">
// //             📊 Real-Time Orderbook Simulator
// //           </h1>
// //           <div className="flex items-center gap-2">
// //             <label className="text-sm font-semibold text-gray-300">
// //               Select Venue:
// //             </label>
// //             <select
// //               value={venue}
// //               onChange={(e) =>
// //                 setVenue(e.target.value as 'OKX' | 'Bybit' | 'Deribit')
// //               }
// //               className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //             >
// //               <option value="OKX">OKX</option>
// //               <option value="Bybit">Bybit</option>
// //               <option value="Deribit">Deribit</option>
// //             </select>
// //           </div>
// //         </header>

// //         {/* Orderbook Panel */}
// //         <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //           <div className="bg-gray-900 rounded-xl p-5 shadow-lg border border-gray-800">
// //             <h2 className="text-lg font-semibold text-green-400 mb-3">
// //               📘 Bids ({symbol})
// //             </h2>
// //             <div className="text-sm max-h-96 overflow-y-auto divide-y divide-gray-800">
// //               {orderbook?.bids?.slice(0, 20).map((b, i) => (
// //                 <div key={i} className="text-green-300 py-1">
// //                   {b.price.toFixed(2)} × {b.quantity}
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           <div className="bg-gray-900 rounded-xl p-5 shadow-lg border border-gray-800">
// //             <h2 className="text-lg font-semibold text-red-400 mb-3">
// //               📕 Asks ({symbol})
// //             </h2>
// //             <div className="text-sm max-h-96 overflow-y-auto divide-y divide-gray-800">
// //               {orderbook?.asks?.slice(0, 20).map((a, i) => (
// //                 <div key={i} className="text-red-300 py-1">
// //                   {a.price.toFixed(2)} × {a.quantity}
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </section>

// //         {/* Simulation Form */}
// //         <section className="bg-gray-900 border border-gray-800 p-6 rounded-xl shadow-lg">
// //           <h2 className="text-xl font-semibold text-indigo-400 mb-4">
// //             🧪 Simulate Order Placement
// //           </h2>
// //           <SimulationForm onSubmitSim={handleSubmit} />
// //         </section>

// //         {/* Simulation Output */}
// //         {simulatedOrder && (
// //           <section className="bg-gray-900 border border-gray-800 p-6 rounded-xl shadow-lg">
// //             <h2 className="text-xl font-semibold text-yellow-400 mb-4">
// //               📍 Simulation Visualization
// //             </h2>
// //             <OrderbookViewer
// //               venue={simulatedOrder.venue}
// //               symbol={simulatedOrder.symbol}
// //               simulatedOrder={simulatedOrder}
// //             />
// //           </section>
// //         )}
// //       </div>
// //     </main>
// //   );
// // }

// 'use client';

// import SimulationForm, {
//   SimulationFormValues,
// } from '@/components/SimulationForm';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import {
//   connectToBybit,
//   disconnectFromBybit,
// } from '@/lib/orderbook/bybitService';
// import {
//   connectToDeribit,
//   disconnectFromDeribit,
// } from '@/lib/orderbook/deribitService';
// import { connectToOKX, disconnectFromOKX } from '@/lib/orderbook/okxService';
// import { useEffect, useState } from 'react';

// import OrderbookViewer from '@/components/OrderbookViewer';
// import { useOrderbookStore } from '@/store/orderbookStore';

// const symbols = {
//   OKX: 'BTC-USDT',
//   Bybit: 'BTCUSDT',
//   Deribit: 'BTC-PERPETUAL',
// } as const;

// export default function DashboardPage() {
//   const [venue, setVenue] = useState<'OKX' | 'Bybit' | 'Deribit'>('OKX');
//   const [simulatedOrder, setSimulatedOrder] = useState<SimulationFormValues>();
//   const symbol = symbols[venue];
//   const orderbook = useOrderbookStore((s) => s.data[venue]?.[symbol]);

//   useEffect(() => {
//     if (venue === 'OKX') connectToOKX(symbol);
//     if (venue === 'Bybit') connectToBybit(symbol);
//     if (venue === 'Deribit') connectToDeribit(symbol);

//     return () => {
//       if (venue === 'OKX') disconnectFromOKX(symbol);
//       if (venue === 'Bybit') disconnectFromBybit(symbol);
//       if (venue === 'Deribit') disconnectFromDeribit(symbol);
//     };
//   }, [venue, symbol]);

//   const handleSubmit = (data: SimulationFormValues) => {
//     setVenue(data.venue);
//     setSimulatedOrder(data);
//   };

//   return (
//     <main className="bg-gray-900 min-h-screen text-white p-6">
//       <div className="max-w-7xl mx-auto space-y-6">
//         {/* Header */}
//         <header className="flex items-center justify-between">
//           <h1 className="text-2xl font-bold">📊 Trading Dashboard</h1>
//           <div>
//             <label className="mr-2 font-semibold">Venue:</label>
//             <select
//               value={venue}
//               onChange={(e) =>
//                 setVenue(e.target.value as 'OKX' | 'Bybit' | 'Deribit')
//               }
//               className="bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded"
//             >
//               <option value="OKX">OKX</option>
//               <option value="Bybit">Bybit</option>
//               <option value="Deribit">Deribit</option>
//             </select>
//           </div>
//         </header>

//         {/* Dashboard Tabs */}
//         <div className="flex gap-4">
//           {/* Left Tabs Navigation */}
//           <Tabs defaultValue="simulation" className="flex w-full">
//             <TabsList className="flex flex-col bg-gray-800 rounded-md p-2 min-w-[180px]">
//               <TabsTrigger value="simulation" className="mb-2">
//                 🧪 Simulate Order
//               </TabsTrigger>
//               <TabsTrigger value="orderbook" className="mb-2">
//                 📘 Orderbook
//               </TabsTrigger>
//               <TabsTrigger value="details">📊 Market Depth</TabsTrigger>
//             </TabsList>

//             {/* Tabs Content */}
//             <div className="flex-1 bg-gray-800 p-6 rounded-md shadow ml-4">
//               <TabsContent value="simulation">
//                 <h2 className="text-xl font-semibold mb-4 text-indigo-400">
//                   🧪 Simulate Order Placement
//                 </h2>
//                 <SimulationForm onSubmitSim={handleSubmit} />
//               </TabsContent>

//               <TabsContent value="orderbook">
//                 <h2 className="text-xl font-semibold mb-4 text-green-400">
//                   🧾 Live Orderbook ({symbol})
//                 </h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <h3 className="text-lg text-green-300 mb-2">Bids</h3>
//                     <div className="text-sm max-h-96 overflow-y-auto space-y-1">
//                       {orderbook?.bids?.slice(0, 15).map((b, i) => (
//                         <div key={i} className="text-green-200">
//                           {b.price.toFixed(2)} × {b.quantity}
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   <div>
//                     <h3 className="text-lg text-red-300 mb-2">Asks</h3>
//                     <div className="text-sm max-h-96 overflow-y-auto space-y-1">
//                       {orderbook?.asks?.slice(0, 15).map((a, i) => (
//                         <div key={i} className="text-red-200">
//                           {a.price.toFixed(2)} × {a.quantity}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </TabsContent>

//               <TabsContent value="details">
//                 <h2 className="text-xl font-semibold mb-4 text-yellow-400">
//                   📍 Market Depth & Simulation Details
//                 </h2>
//                 {simulatedOrder ? (
//                   <OrderbookViewer
//                     venue={simulatedOrder.venue}
//                     symbol={simulatedOrder.symbol}
//                     simulatedOrder={simulatedOrder}
//                   />
//                 ) : (
//                   <div className="text-gray-400">
//                     Submit an order simulation to view details.
//                   </div>
//                 )}
//               </TabsContent>
//             </div>
//           </Tabs>
//         </div>
//       </div>
//     </main>
//   );
// }

'use client';

import SimulationForm, {
  SimulationFormValues,
} from '@/components/SimulationForm';
import {
  connectToBybit,
  disconnectFromBybit,
} from '@/lib/orderbook/bybitService';
import {
  connectToDeribit,
  disconnectFromDeribit,
} from '@/lib/orderbook/deribitService';
import { connectToOKX, disconnectFromOKX } from '@/lib/orderbook/okxService';
import { useEffect, useState } from 'react';

import OrderbookViewer from '@/components/OrderbookViewer';
import { useOrderbookStore } from '@/store/orderbookStore';

const symbols = {
  OKX: 'BTC-USDT',
  Bybit: 'BTCUSDT',
  Deribit: 'BTC-PERPETUAL',
} as const;

export default function DashboardPage() {
  const [venue, setVenue] = useState<'OKX' | 'Bybit' | 'Deribit'>('OKX');
  const [simulatedOrder, setSimulatedOrder] = useState<SimulationFormValues>();
  const symbol = symbols[venue];
  const orderbook = useOrderbookStore((s) => s.data[venue]?.[symbol]);

  useEffect(() => {
    if (venue === 'OKX') connectToOKX(symbol);
    if (venue === 'Bybit') connectToBybit(symbol);
    if (venue === 'Deribit') connectToDeribit(symbol);

    return () => {
      if (venue === 'OKX') disconnectFromOKX(symbol);
      if (venue === 'Bybit') disconnectFromBybit(symbol);
      if (venue === 'Deribit') disconnectFromDeribit(symbol);
    };
  }, [venue, symbol]);

  const handleSubmit = (data: SimulationFormValues) => {
    setVenue(data.venue);
    setSimulatedOrder(data);
  };

  return (
    <main className="bg-gray-900 min-h-screen text-white p-6">
      <div className="max-w-[100vw] mx-auto space-y-6">
        {/* Header */}
        <header className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">📊 Trading Dashboard</h1>
          <div>
            <label className="mr-2 font-semibold">Venue:</label>
            <select
              value={venue}
              onChange={(e) =>
                setVenue(e.target.value as 'OKX' | 'Bybit' | 'Deribit')
              }
              className="bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded"
            >
              <option value="OKX">OKX</option>
              <option value="Bybit">Bybit</option>
              <option value="Deribit">Deribit</option>
            </select>
          </div>
        </header>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column - Simulation */}
          <section className="bg-gray-800 rounded-lg p-4 shadow">
            <h2 className="text-xl font-semibold text-indigo-400 mb-4">
              🧪 Simulate Order Placement
            </h2>
            <SimulationForm onSubmitSim={handleSubmit} />
          </section>

          {/* Middle Column - Live Orderbook */}
          <section className="bg-gray-800 rounded-lg p-4 shadow max-h-[85vh] overflow-y-auto">
            <h2 className="text-xl font-semibold text-green-400 mb-4">
              📘 Orderbook ({symbol})
            </h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="text-green-300 mb-2">Bids</h3>
                <div className="space-y-1">
                  {orderbook?.bids?.slice(0, 20).map((b, i) => (
                    <div key={i} className="text-green-200">
                      {b.price.toFixed(2)} × {b.quantity}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-red-300 mb-2">Asks</h3>
                <div className="space-y-1">
                  {orderbook?.asks?.slice(0, 20).map((a, i) => (
                    <div key={i} className="text-red-200">
                      {a.price.toFixed(2)} × {a.quantity}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Right Column - Simulation Output */}
          <section className="bg-gray-800 rounded-lg p-4 shadow overflow-y-auto max-h-[85vh]">
            <h2 className="text-xl font-semibold text-yellow-400 mb-4">
              📊 Market Depth & Simulation Details
            </h2>
            {simulatedOrder ? (
              <OrderbookViewer
                venue={simulatedOrder.venue}
                symbol={simulatedOrder.symbol}
                simulatedOrder={simulatedOrder}
              />
            ) : (
              <div className="text-gray-400">
                Submit an order to view simulation results.
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
