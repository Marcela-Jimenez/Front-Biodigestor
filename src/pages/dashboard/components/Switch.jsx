import { cn } from '../../../utils';

export function Switch({ active, setActive }) {
  return (
    <label className="flex w-full mx-auto cursor-pointer items-center justify-center">
      <input
        checked={!active}
        className="hidden"
        type="checkbox"
        onClick={() => setActive((state) => !state)}
      />
      <div className="relative grid w-1/2 max-w-[15rem] select-none grid-cols-2 justify-between rounded-3xl bg-teal-500 py-2 font-semibold  text-white [&_span]:z-20">
        <div
          className={cn(
            'absolute left-0 top-0 h-full w-1/2  rounded-3xl bg-amber-500 transition-transform',
            {
              'translate-x-full': !active,
            }
          )}
        />
        <span
          className={cn('text-center transition-colors', {
            'text-primary-950': !active,
          })}
        >
          RL
        </span>
        <span
          className={cn('text-center transition-colors', {
            'text-primary-950': !active,
          })}
        >
          SD
        </span>
      </div>
    </label>
  );
}
