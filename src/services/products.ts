import { AxiosResponse } from "axios";
import { createBaseApi } from "../axios";
import { IDataType, PaginationType } from "./types";

interface ISearchParams extends PaginationType {
  search?: string | null;
}

export type ImageType = {
  url: string;
};

export type ProductType = {
  nome: string;
  descricao: string;
  preco_promocional: number;
  preco_original: number;
  imagens: ImageType[];
  categoria: string;
};

class ProdutsService {
  static index(
    params: ISearchParams
  ): Promise<AxiosResponse<IDataType<Array<ProductType>>>> {
    return createBaseApi().get(`/products`, { params });
  }
}

export default ProdutsService;
