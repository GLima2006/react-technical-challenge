// Nesta pasta devem ser adicionadas as funções que farão a requisição ao backend

import { api } from "@/libs/axios/api";

import { ProductType } from "../types/product-type";
import { StrapiResponse } from "@/types/strapi";

export const PRODUCTS_PATH = "/products";

export const getProducts = async (): Promise<ProductType[]> => {
  try {
    const data = await api.get<StrapiResponse<ProductType[]>>(PRODUCTS_PATH, {
      params: {
        pagination: {
          page: 1,
          pageSize: 100,
        },
      },
    });
    return data?.data?.data;
  } catch (error: any) {
    console.log({ error });
    return error?.error;
  }
};
