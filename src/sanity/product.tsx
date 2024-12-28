
// sanity/pet.ts
export default {
    name: 'books',
    type: 'document',
    title: 'Books',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price'
        },
        {
            name: 'authar',
            type: 'string',
            title: 'Authar'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        }
    ]
}