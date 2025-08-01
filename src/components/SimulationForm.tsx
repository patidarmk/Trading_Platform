// 'use client';

// import * as yup from 'yup';

// import { SubmitHandler, useForm } from 'react-hook-form';

// import { yupResolver } from '@hookform/resolvers/yup';

// // --- Type Definitions ---
// export type Venue = 'OKX' | 'Bybit' | 'Deribit';
// export type OrderType = 'Market' | 'Limit';
// export type Side = 'Buy' | 'Sell';

// // --- Yup Validation Schema ---
// const schema = yup.object({
//   venue: yup
//     .mixed<Venue>()
//     .oneOf(['OKX', 'Bybit', 'Deribit'])
//     .required('Venue is required'),
//   symbol: yup.string().required('Symbol is required'),
//   orderType: yup
//     .mixed<OrderType>()
//     .oneOf(['Market', 'Limit'])
//     .required('Order type is required'),
//   side: yup.mixed<Side>().oneOf(['Buy', 'Sell']).required('Side is required'),
//   quantity: yup
//     .number()
//     .typeError('Quantity must be a number')
//     .positive('Must be greater than 0')
//     .required('Quantity required'),
//   price: yup
//     .number()
//     .typeError('Price must be a number')
//     .positive('Price must be > 0')
//     .when('orderType', {
//       is: 'Limit',
//       then: (schema) => schema.required('Price is required for limit orders'),
//       otherwise: (schema) => schema.notRequired(),
//     }),
//   delay: yup.number().oneOf([0, 5, 10, 30]).required('Delay is required'),
// });

// export type SimulationFormValues = yup.InferType<typeof schema>;

// export default function SimulationForm({
//   onSubmitSim,
// }: {
//   onSubmitSim: SubmitHandler<SimulationFormValues>;
// }) {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm<SimulationFormValues>({
//     resolver: yupResolver<SimulationFormValues>(schema), // ✅ Critical fix
//     defaultValues: {
//       venue: 'OKX',
//       symbol: 'BTC-USDT',
//       orderType: 'Limit',
//       side: 'Buy',
//       quantity: 1,
//       price: 30000,
//       delay: 0,
//     },
//   });

//   const orderType = watch('orderType');

//   return (
//     <form onSubmit={handleSubmit(onSubmitSim)} className="space-y-4 max-w-md">
//       <div>
//         <label className="block mb-1">Venue</label>
//         <select
//           {...register('venue')}
//           className="w-full border px-2 py-1 rounded"
//         >
//           <option value="OKX">OKX</option>
//           <option value="Bybit">Bybit</option>
//           <option value="Deribit">Deribit</option>
//         </select>
//         <p className="text-red-600 text-sm">{errors.venue?.message}</p>
//       </div>

//       <div>
//         <label className="block mb-1">Symbol</label>
//         <input
//           {...register('symbol')}
//           className="w-full border px-2 py-1 rounded"
//           placeholder="e.g. BTC-USDT"
//         />
//         <p className="text-red-600 text-sm">{errors.symbol?.message}</p>
//       </div>

//       <div>
//         <label className="block mb-1">Order Type</label>
//         <select
//           {...register('orderType')}
//           className="w-full border px-2 py-1 rounded"
//         >
//           <option value="Market">Market</option>
//           <option value="Limit">Limit</option>
//         </select>
//         <p className="text-red-600 text-sm">{errors.orderType?.message}</p>
//       </div>

//       <div>
//         <label className="block mb-1">Side</label>
//         <select
//           {...register('side')}
//           className="w-full border px-2 py-1 rounded"
//         >
//           <option value="Buy">Buy</option>
//           <option value="Sell">Sell</option>
//         </select>
//         <p className="text-red-600 text-sm">{errors.side?.message}</p>
//       </div>

//       {orderType === 'Limit' && (
//         <div>
//           <label className="block mb-1">Price</label>
//           <input
//             type="number"
//             step="0.01"
//             {...register('price')}
//             className="w-full border px-2 py-1 rounded"
//           />
//           <p className="text-red-600 text-sm">{errors.price?.message}</p>
//         </div>
//       )}

//       <div>
//         <label className="block mb-1">Quantity</label>
//         <input
//           type="number"
//           step="0.0001"
//           {...register('quantity')}
//           className="w-full border px-2 py-1 rounded"
//         />
//         <p className="text-red-600 text-sm">{errors.quantity?.message}</p>
//       </div>

//       <div>
//         <label className="block mb-1">Execution Delay</label>
//         <select
//           {...register('delay')}
//           className="w-full border px-2 py-1 rounded"
//         >
//           <option value={0}>Immediate</option>
//           <option value={5}>5 seconds</option>
//           <option value={10}>10 seconds</option>
//           <option value={30}>30 seconds</option>
//         </select>
//         <p className="text-red-600 text-sm">{errors.delay?.message}</p>
//       </div>

//       <button
//         type="submit"
//         className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
//       >
//         Simulate Order
//       </button>
//     </form>
//   );
// }

'use client';

import * as yup from 'yup';

import { SubmitHandler, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

export type Venue = 'OKX' | 'Bybit' | 'Deribit';
export type OrderType = 'Market' | 'Limit';
export type Side = 'Buy' | 'Sell';

// ✅ Schema
const schema = yup.object({
  venue: yup.string().oneOf(['OKX', 'Bybit', 'Deribit']).required(),
  symbol: yup.string().required('Symbol is required'),
  orderType: yup.string().oneOf(['Market', 'Limit']).required(),
  side: yup.string().oneOf(['Buy', 'Sell']).required(),
  quantity: yup
    .number()
    .typeError('Quantity must be a number')
    .positive('Must be greater than 0')
    .required('Quantity required'),
  price: yup
    .number()
    .typeError('Price must be a number')
    .positive('Price must be > 0')
    .when('orderType', {
      is: 'Limit',
      then: (schema) => schema.required('Price is required for limit orders'),
      otherwise: (schema) => schema.notRequired(),
    }),
  delay: yup.number().oneOf([0, 5, 10, 30]).required(),
});

export type SimulationFormValues = yup.InferType<typeof schema>;

export default function SimulationForm({
  onSubmitSim,
}: {
  onSubmitSim: SubmitHandler<SimulationFormValues>;
}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SimulationFormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      venue: 'OKX',
      symbol: 'BTC-USDT',
      orderType: 'Limit',
      side: 'Buy',
      quantity: 1,
      price: 30000,
      delay: 0,
    },
  });

  const orderType = watch('orderType');

  return (
    <form onSubmit={handleSubmit(onSubmitSim)} className="grid gap-4 text-sm">
      {/* Venue Selector */}
      <div>
        <label className="block mb-1 text-gray-300">Venue</label>
        <select
          {...register('venue')}
          className="w-full bg-gray-900 border border-gray-700 px-3 py-2 rounded text-white"
        >
          <option value="OKX">OKX</option>
          <option value="Bybit">Bybit</option>
          <option value="Deribit">Deribit</option>
        </select>
        <p className="text-red-500 text-xs mt-1">{errors.venue?.message}</p>
      </div>

      {/* Symbol Input */}
      <div>
        <label className="block mb-1 text-gray-300">Symbol</label>
        <input
          {...register('symbol')}
          className="w-full bg-gray-900 border border-gray-700 px-3 py-2 rounded text-white"
          placeholder="e.g. BTC-USDT"
        />
        <p className="text-red-500 text-xs mt-1">{errors.symbol?.message}</p>
      </div>

      {/* Order Type */}
      <div>
        <label className="block mb-1 text-gray-300">Order Type</label>
        <select
          {...register('orderType')}
          className="w-full bg-gray-900 border border-gray-700 px-3 py-2 rounded text-white"
        >
          <option value="Market">Market</option>
          <option value="Limit">Limit</option>
        </select>
        <p className="text-red-500 text-xs mt-1">{errors.orderType?.message}</p>
      </div>

      {/* Side */}
      <div>
        <label className="block mb-1 text-gray-300">Side</label>
        <select
          {...register('side')}
          className="w-full bg-gray-900 border border-gray-700 px-3 py-2 rounded text-white"
        >
          <option value="Buy">Buy</option>
          <option value="Sell">Sell</option>
        </select>
        <p className="text-red-500 text-xs mt-1">{errors.side?.message}</p>
      </div>

      {/* Price (only for limit orders) */}
      {orderType === 'Limit' && (
        <div>
          <label className="block mb-1 text-gray-300">Price</label>
          <input
            type="number"
            step="0.01"
            {...register('price')}
            className="w-full bg-gray-900 border border-gray-700 px-3 py-2 rounded text-white"
          />
          <p className="text-red-500 text-xs mt-1">{errors.price?.message}</p>
        </div>
      )}

      {/* Quantity */}
      <div>
        <label className="block mb-1 text-gray-300">Quantity</label>
        <input
          type="number"
          step="0.0001"
          {...register('quantity')}
          className="w-full bg-gray-900 border border-gray-700 px-3 py-2 rounded text-white"
        />
        <p className="text-red-500 text-xs mt-1">{errors.quantity?.message}</p>
      </div>

      {/* Delay */}
      <div>
        <label className="block mb-1 text-gray-300">Execution Delay</label>
        <select
          {...register('delay')}
          className="w-full bg-gray-900 border border-gray-700 px-3 py-2 rounded text-white"
        >
          <option value={0}>Immediate</option>
          <option value={5}>5 seconds</option>
          <option value={10}>10 seconds</option>
          <option value={30}>30 seconds</option>
        </select>
        <p className="text-red-500 text-xs mt-1">{errors.delay?.message}</p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded w-full"
      >
        Simulate Order
      </button>
    </form>
  );
}
