export enum ProductCategory {
    Cleaning = 1,
    Maintenance = 2,
    RoadsideAssistance = 3,
    Accessory = 4,
}

export enum ProductStatus {
    Inactive = 1, // invisible
    Active = 2, // visible as active
    Expired = 3, // visible as expired
}

export const ProductRequired: Array<string> = [
    'category',
    'status',
    'amount',
    'title',
    'description',
];

export interface Product {
    id?: number; // primary key of this product model record
    category: number; // please refer to the product categories above
    status: number; // please refer to the product statuses above
    amount: number; // price of this product (quantity: 1)
    title: string;
    description: string;
}
