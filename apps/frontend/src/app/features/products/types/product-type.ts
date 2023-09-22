import { CategoryType } from "@/features/categories/types/category-type";
import { ColorType } from "@/features/colors/types/color-type";
import { RemoteImageType } from "@/types/strapi";

export type ProductType = {
  id: number;
  name?: string;
  description?: string;
  price?: number
  category?: CategoryType;
  color?: ColorType;
  image?: RemoteImageType;
};
