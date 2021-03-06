export default {
  name: 'mainImage',
  type: 'image',
  title: 'Imagen',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'caption',
      type: 'string',
      title: 'No tocar',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'alt',
      type: 'string',
      title: 'No tocar',
      description: 'Important for SEO and accessiblity.',
      //validation: Rule => Rule.error('You have to fill out the alternative text.').required(),
      //options: {
      //  isHighlighted: true
      //}
    }
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption'
    }
  }
}
