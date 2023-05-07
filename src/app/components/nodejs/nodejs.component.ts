import { Component } from '@angular/core';

@Component({
  selector: 'app-nodejs',
  templateUrl: './nodejs.component.html',
  styleUrls: ['./nodejs.component.scss'],
})
export class NodejsComponent {
  fourQuestion = `
  import { EventEmitter } from 'events';
  const eventEmitter = new EventEmitter();

  eventEmitter.on('myEvent', (data) => {
      console.log(data, '- FIRST');
  });

  console.log('Statement A');

  eventEmitter.on("myEvent", data => {
      console.log(data, '- SECOND');
  });

  eventEmitter.emit('myEvent', 'Emitted Statement');

  console.log("Statement B");`;

  fifthQuestion = `
  import fs from 'fs-promise'

  async function printFiles () {
  const files = await getFilePaths() // Assume this works fine

  files.forEach(async (file) => {
      const contents = await fs.readFile(file, 'utf8')
      console.log(contents)
  })
  }

  printFiles()
  `;

  fifthAnswer = `
  import fs from 'fs-promise';

  async function printFiles() {
    const files = await getFilePaths(); // Assume this works fine

    await Promise.all(
      files.map(async (file) => {
        const contents = await fs.readFile(file, 'utf8');
        console.log(contents);
        
        return contents;
      })
    );
  }

  printFiles();
  `;

  example = `
    function foo() {
      return 'bar';
    }

    module.exports = foo;

    const foo = require('./foo')
    console.log(foo());
  `;
}


