declare module "*.png";

declare type Optional<T> = T | undefined;
declare type Nullable<T> = T | null;

declare type MeasurableRef<T> = T & {
  offsetWidth: number;
  offsetHeight: number;
};
