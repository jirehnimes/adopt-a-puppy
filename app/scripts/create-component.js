const { program } = require('commander');
const fs = require('fs');
const _ = require('lodash');
const path = require('path');

const COMPONENTS_DIR = '../src/components/';
const COMPONENT_TYPES = {
  APP: 'app',
  COMMON: 'common',
  PAGES: 'pages',
};

program
  .name('create:component')
  .argument('<name>', 'component name and path to create')
  .option('--type <type>', 'component type', COMPONENT_TYPES.COMMON);

program.parse();

const args = program.args;
const { type: componentType } = program.opts();

console.log(args);
console.log(componentType);

const componentName = args[0] || 'default';
const componentDirsPath = path.join(__dirname, `${COMPONENTS_DIR}${componentType}/${componentName}`);
const componentFileName = _.upperFirst(_.camelCase(componentName));

console.log(componentName);
console.log(componentDirsPath);
console.log(componentFileName);

const componentFileTemplate = `import React from 'react';

const {componentname} = () => {
  return <></>;
};

export default {componentname};
`;

const componentIndexTemplate = `import {componentname} from './{componentname}'

export default {componentname};
`;

function createComponentFile() {
  const componentFilePath = `${componentDirsPath}/${componentFileName}.tsx`;

  fs.writeFileSync(
    componentFilePath,
    componentFileTemplate.replaceAll('{componentname}', componentFileName),
  );

  console.log('Component file created successfully:', componentFilePath);
}

function createComponentIndex() {
  const componentIndexPath = `${componentDirsPath}/index.ts`;

  fs.writeFileSync(
    componentIndexPath,
    componentIndexTemplate.replaceAll('{componentname}', componentFileName),
  );

  console.log('Component index file created successfully:', componentIndexPath);
}

function updateComponentTypeIndex() {
  const componentTypeIndexPath = path.join(__dirname, `${COMPONENTS_DIR}${componentType}/index.ts`);

  const stream = fs.createWriteStream(componentTypeIndexPath, { flags: 'a' });
  stream.write(`export { default as ${componentFileName} } from './${componentName}';\n`);
  stream.end();
}

// Execute

(function () {
  if (Object.values(COMPONENT_TYPES).includes(componentType) === false) throw 'Invalid component type';

  fs.mkdir(componentDirsPath, { recursive: true }, function (error) {
    if (error) throw error;

    createComponentFile();
    createComponentIndex();
    updateComponentTypeIndex();
  });
})();
