module.exports = {
  // Load Mock To Do items into localStorage
  init: function() {
    // localStorage allows you to access a local Storage object.
    // Storage interface provides access to session/localStorage for a particular domain
    // and allows you to add, modify or delete stored data items.
    localStorage.clear();
    localStorage.setItem('toDo', JSON.stringify([
      {
        id: '12345',
        name: 'choices'
        description: 'A list of To Do items that can be selected.'
        variants: [
          {
            item: 'grocery shopping',
          },
          {
            item: 'clean house',
          },
          {
            item: 'mow lawn'
          },
          {
            item: 'walk dogs'
          },
          {
            item: 'shopping'
          },
          {
            item: 'prepare meals'
          }
        ]
      }
    ]));
  }
};
