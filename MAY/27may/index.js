// module exports
//how to export functions from one file to another
const fs = require("fs");
const math = require("./math");
console.log(math);

let x = 5,
  y = 4;
console.log(`x + y = ${math.sum(x, y)}`);
console.log(`x - y = ${math.sub(x, y)}`);
console.log(`x * y = ${math.mul(x, y)}`);

fs.copyFile("original.txt", "copyFromOg.txt", (err) => {
    if (err) throw err;
    console.log("txt copied done 👍🏻");
  });

const data = fs.readFileSync("longText.txt");
console.log(data.toString());
console.log("Done 👍🏻");
//"w" -if the file is not there, what should i do? 'w': Open file for writing. The file is created (if it does not exist) or truncated (if it exists).


fs.open("new.txt", "w", (err, data) => {
    if (err) throw err;
  
    console.log("Done 👍🏻");
  });
//// https://nodejs.org/docs/latest-v12.x/api/fs.html#fs_file_system_flags

/* 
File System Flags#
The following flags are available wherever the flag option takes a string.

'a': Open file for appending. The file is created if it does not exist.

'ax': Like 'a' but fails if the path exists.

'a+': Open file for reading and appending. The file is created if it does not exist.

'ax+': Like 'a+' but fails if the path exists.

'as': Open file for appending in synchronous mode. The file is created if it does not exist.

'as+': Open file for reading and appending in synchronous mode. The file is created if it does not exist.

'r': Open file for reading. An exception occurs if the file does not exist.

'r+': Open file for reading and writing. An exception occurs if the file does not exist.

'rs+': Open file for reading and writing in synchronous mode. Instructs the operating system to bypass the local file system cache.

This is primarily useful for opening files on NFS mounts as it allows skipping the potentially stale local cache. It has a very real impact on I/O performance so using this flag is not recommended unless it is needed.

This doesn't turn fs.open() or fsPromises.open() into a synchronous blocking call. If synchronous operation is desired, something like fs.openSync() should be used.

'w': Open file for writing. The file is created (if it does not exist) or truncated (if it exists).

'wx': Like 'w' but fails if the path exists.

'w+': Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).

'wx+': Like 'w+' but fails if the path exists.
*/