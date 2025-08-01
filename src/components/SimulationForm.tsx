'use client';

import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export type Venue = 'OKX' | 'Bybit' | 'Deribit';
export type OrderType = 'Market' | 'Limit';
export type Side = 'Buy' | 'Sell';

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
    setValue,
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
      {/* Venue */}
      <div  className="grid gap-4 w-full max-w-md mx-auto text-sm">
        <Label>Venue</Label>
        <Select
          value={watch('venue')}
          onValueChange={(val) => setValue('venue', val as Venue)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select venue" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="OKX">OKX</SelectItem>
            <SelectItem value="Bybit">Bybit</SelectItem>
            <SelectItem value="Deribit">Deribit</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-xs text-red-500">{errors.venue?.message}</p>
      </div>

      {/* Symbol */}
      <div className="grid gap-1.5">
        <Label>Symbol</Label>
        <Input placeholder="e.g. BTC-USDT" {...register('symbol')} />
        <p className="text-xs text-red-500">{errors.symbol?.message}</p>
      </div>

      {/* Order Type */}
      <div className="grid gap-1.5">
        <Label >Order Type</Label>
        <Select
          value={watch('orderType')}
          onValueChange={(val) => setValue('orderType', val as OrderType)}
        >
        <SelectTrigger className="w-full">
            <SelectValue placeholder="Select order type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Market">Market</SelectItem>
            <SelectItem value="Limit">Limit</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-xs text-red-500">{errors.orderType?.message}</p>
      </div>

      {/* Side */}
      <div className="grid gap-1.5">
        <Label>Side</Label>
        <Select
          value={watch('side')}
          onValueChange={(val) => setValue('side', val as Side)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select side" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Buy">Buy</SelectItem>
            <SelectItem value="Sell">Sell</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-xs text-red-500">{errors.side?.message}</p>
      </div>

      {/* Price */}
      {orderType === 'Limit' && (
        <div className="grid gap-1.5">
          <Label>Price</Label>
          <Input className="w-full"  type="number" step="0.01" {...register('price')} />
          <p className="text-xs text-red-500">{errors.price?.message}</p>
        </div>
      )}

      {/* Quantity */}
      <div className="grid gap-1.5">
        <Label>Quantity</Label>
        <Input className="w-full"  type="number" step="0.0001" {...register('quantity')} />
        <p className="text-xs text-red-500">{errors.quantity?.message}</p>
      </div>

      {/* Delay */}
      <div className="grid gap-1.5">
        <Label>Execution Delay</Label>
        <Select
          value={String(watch('delay'))}
          onValueChange={(val) => setValue('delay', Number(val))}
        >
         <SelectTrigger className="w-full">
            <SelectValue placeholder="Select delay" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">Immediate</SelectItem>
            <SelectItem value="5">5 seconds</SelectItem>
            <SelectItem value="10">10 seconds</SelectItem>
            <SelectItem value="30">30 seconds</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-xs text-red-500">{errors.delay?.message}</p>
      </div>

      <Button type="submit" className="w-full mt-4">
        Simulate Order
      </Button>
    </form>
  );
}
