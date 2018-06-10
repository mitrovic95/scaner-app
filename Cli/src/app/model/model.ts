export class InventoryItem {
    id?: number;
    name: string;
    description: string;
    orderNumber: number;
    value: number;
    barcode: number;
    category: {
        id: number;
        name: string;
    }
 }

 export const ITEMS: InventoryItem[] = [
    {
    id: 1,
    name: 'String',
    description: 'String',
    orderNumber: 2,
    value: 3,
    barcode: 4212312314,
        category: {
            id: 1,
            name: 'String'
        }
    },
    {
        id: 2,
        name: 'String',
        description: 'String',
        orderNumber: 2,
        value: 3,
        barcode: 44,
            category: {
                id: 2,
                name: 'String'
            }
        }
];
