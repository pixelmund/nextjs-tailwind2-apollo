import { HTMLProps } from 'react';

type Props = {} & HTMLProps<HTMLInputElement>;

export default function Input(props: Props) {
  return (
    <input
      className="py-2 pr-3 pl-1.5 dark:bg-gray-800 bg-gray-100 rounded border border-transparent focus:border-indigo-600 transition-colors focus:outline-none focus:ring-1 ring-indigo-400 ring-opacity-75 placeholder-gray-500"
      type={props.type}
      {...props}
    />
  );
}
