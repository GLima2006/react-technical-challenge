import Column from "@/features/core/components/column";
import Text from "@/features/core/components/text";
import { classNameBuilder } from "@/helpers/class-name-builder";
import React from "react";
import { ProductType } from "../types/product-type";
import Image from "next/image";

export interface ProductCardProps {
  product?: ProductType;
  className?: string;
}
export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  className,
}) => {
  if (!product) return null;
  const formattedProductPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product.price || 0);
  return (
    <Column
      className={classNameBuilder(
        "py-2 bg-white border border-gray-light rounded-md",
        className ?? "h-full w-full"
      )}
    >
      <div className="relative aspect-square overflow-hidden mx-[10px]">
        <Image
          className="object-cover"
          fill
          src={product.image?.url || ""}
          alt={product.name || ""}
        />
      </div>
      <Text className="font-medium mx-4 mt-4" color="darkest-gray" size="md">
        {formattedProductPrice}
      </Text>
      <Text className="mx-4 mt-1" color="gray-500" size="md">
        {product.name || ""}
      </Text>
    </Column>
  );
};

export default ProductCard;
