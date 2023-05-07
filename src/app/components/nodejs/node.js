// import fs from 'fs-promise'
const fs = require("fs-promise");
async function printFiles() {
  const files = await getFilePaths(); // Assume this works fine

  files.forEach(async (file) => {
    const contents = await fs.readFile(file, "utf8");
    console.log(contents);
  });
}

printFiles();
