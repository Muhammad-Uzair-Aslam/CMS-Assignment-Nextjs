const Card = {
    name: 'cards',
    title: 'Cards',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name:'description',
        title:'Description',
        type:'string'
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative Text',
          }
        ]
      },
    ],
    preview: {
      select: {
        title: 'title',
        media: 'image',
        description:'description'
      },
    },
  }
  export default Card
