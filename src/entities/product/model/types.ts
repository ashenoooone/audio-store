export type ProductType = {
  img: string;
  title: string;
  price: number;
  rate: number;
  old_price?: number;
  description: string;
};

export type ProductModalStoreType = {
  item?: ProductType;
  isOpen?: boolean;
  onClose?: () => void;
  open?: (product: ProductType) => void;
};
