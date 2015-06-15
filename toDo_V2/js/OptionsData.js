module.exports = {
  // Load Mock Product Data Into localStorage
  init: function() {
    localStorage.clear();
    localStorage.setItem('options', JSON.stringify([
      {
        id: '000001',
        name: 'To Do Options List',
        description: 'List of To Do Items to select from.',
        variants: [
          {
            optionID: '0001',
            toDoOption: 'clean house'
          },
          {
            optionID: '0002',
            toDoOption: 'grocery shopping'
          },
          {
            optionID: '0003',
            toDoOption: 'prepare meals'
          },
          {
            optionID: '0004',
            toDoOption: 'pay bills'
          },
          {
            optionID: '0005',
            toDoOption: 'check kids homework'
          },
          {
            optionID: '0006',
            toDoOption: 'walk dog'
          }
        ]
      }
    ]));
  }
};
