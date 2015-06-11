// To model after the scotch.io tutorial of selecting different types of beer for a
// shopping cart, I provided a list of items that can be selected as to-do items for
// the to-do app.

module.exports = {
  // Load Mock To Do items into localStorage
  init: function() {
    // localStorage allows you to access a local Storage object.
    // Storage interface provides access to session/localStorage for a particular domain
    // and allows you to add, modify or delete stored data items.
    localStorage.clear();
    localStorage.setItem('toDoList', JSON.stringify([
      {
        id: '12345',
        name: 'Items',
        description: 'A list of To Do items that can be selected.',
        variants: [
          {
            itemID: '0001',
            item: 'grocery shopping'
          },
          {
            itemID: '0002',
            item: 'clean house'
          },
          {
            itemID: '0003',
            item: 'mow lawn'
          },
          {
            itemID: '0004',
            item: 'walk dogs'
          },
          {
            itemID: '0005',
            item: 'shopping'
          },
          {
            itemID: '0006',
            item: 'prepare meals'
          }
        ]
      }
    ]));
  }
};
