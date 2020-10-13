await es.index({
    index: 'images-index',
    type: 'images',
    id: 'id', // Document ID
    body: {  // Document to store
      title: 'title',
      imageUrl: 'https://example.com/image.png'
    }
  })