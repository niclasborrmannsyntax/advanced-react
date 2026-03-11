export const compose =
  (...hocs: any[]) =>
  (WrappedComponent: any) =>
    hocs.reduceRight((acc, hoc) => hoc(acc), WrappedComponent);
