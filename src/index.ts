import * as fs from "fs";

const path = "./message.txt";
const data = "Hello World!";
const encoding = "utf8";

console.log(data);

fs.writeFile(path, data, encoding, (error) => {
  if (error) {
    console.log(error);
  }
});
