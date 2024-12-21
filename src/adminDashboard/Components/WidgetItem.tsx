import { HiTrendingDown, HiTrendingUp } from 'react-icons/hi';

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}
const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount,
}: WidgetItemProps) => {
  return (
    <div className='flex bg-white rounded-2xl px-8 py-4 gap-4 w-full justify-start'>
      <div>
        <p className='text-gray-700 text-sm'>{heading}</p>
        <h4 className='font-bold text-gray-800 text-xl'>
          {amount ? `$${value}` : value}
        </h4>
        {percent > 0 ? (
          <span className='text-green-500 flex items-center gap-1'>
            <HiTrendingUp /> +{percent}%{' '}
          </span>
        ) : (
          <span className='text-red-500 flex items-center gap-1'>
            <HiTrendingDown /> {percent}%{' '}
          </span>
        )}
      </div>

      <div
        className='relative h-20 w-20 rounded-full grid place-items-center bg-amber-500 '
        style={{
          background: `conic-gradient(${color} ${
            (Math.abs(percent) / 100) * 360
          }deg,rgb(255,255,255)0 )`,
        }}
      >
        <span color={color}>{percent}%</span>
      </div>
    </div>
  );
};

export default WidgetItem;
