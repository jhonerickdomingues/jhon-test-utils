export type PaginationType = {
  current_page?: number | string | null;
  last_page?: number | string | null;
  per_page?: number | string | null;
  total?: number | string | null;
};

export type IDataType<T> = {
  meta?: PaginationType;
  data?: T;
};
