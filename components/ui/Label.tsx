import { HTMLProps, ReactNode } from 'react';

type Props = {
  children: ReactNode;
} & HTMLProps<HTMLLabelElement>;

export default function Label(props: Props) {
  return (
    <label
      className="block mb-1 mt-3 text-gray-700 dark:text-gray-300 font-semibold text-xs uppercase tracking-wider"
      htmlFor={props.htmlFor}
    >
      {props.children}
    </label>
  );
}
