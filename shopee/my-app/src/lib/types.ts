export interface RequestOptions {
    httpOptions:{
        url: string,
        method: string,
        headers?: Record<string, string>,
        timeout?: number
    }
}

export interface Product {
    id: number,
    title: string,
    description?: string,
    price: number,
    urls?: string[],
    discountPercentage?: number,
    stock: number,
    rating?: number,
    category?: string,
}

export interface ElementType {
    data: object | Product[];
}

export interface AllProducts { 
    allProducts: Product[] | object;
}
  

