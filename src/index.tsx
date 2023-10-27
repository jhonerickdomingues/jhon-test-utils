// axios
import { createBaseApi, axios } from "./axios";

// services
export type { ProductType } from "./services/products";
import ProdutsService from "./services/products";
export type { PaginationType } from "./services/types";

import { seti18n, useTranslation } from "./i18n";
import { centsToReal } from "./formatters/money";

export {
  createBaseApi,
  axios,
  ProdutsService,
  seti18n,
  useTranslation,
  centsToReal,
};
