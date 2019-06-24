declare module 'tailwind.macro' {
  type TailwindComponentFactories<T extends object> = {
    [TTag in keyof JSX.IntrinsicElements]: ThemedStyledFunction<TTag, T>;
  };
  // type TailwindComponentFactories = ThemedStyledComponen
  function tw(...args: any[]);

  declare const tailwind: tw | TailwindComponentFactories;

  export default tailwind;
}
