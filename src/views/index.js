import '../views/index.scss';
import '../components/Todo/index.scss';

import todo from '../components/Todo/index.js';

const babel = {
  methods() {
    alert('Start project');
  },
  test: 'dsf',
};

const arr = ['la', 'ici'];

const test = `${babel.test}`;

if (arr === null) {
  console.log(test, arr);
}

console.log(todo);

babel.methods();
