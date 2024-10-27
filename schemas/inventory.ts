// /schemas/inventory.ts
import { defineType, Rule } from 'sanity';

export default defineType({
  name: 'inventoryItem',
  type: 'document',
  title: 'Inventory Item',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Item Name',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'quantity',
      type: 'number',
      title: 'Quantity',
      validation: (Rule: Rule) => Rule.min(0).integer(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
  ],
});
