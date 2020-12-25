const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('----BUILD ALL start----');

/**
 * build
 * @param src build文件路径
 */
const nodepptExec = async (src) => {
  console.log(`----start nodeppt build ${src}---`);
  await exec(`nodeppt build ${src}`, [], async (err, stdout, stderr) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`----end nodeppt build ${src}---`);
  })
}

/**
 * 文件遍历方法
 * @param filePath 需要遍历的文件路径
 */
const fileDisplay = async (filePath) => {
  // 根据文件路径读取文件，返回文件列表
  await fs.readdir(filePath, function (err, files) {
    if (err) {
      console.warn(err)
    } else {
      // 遍历读取到的文件列表
      files.forEach(function (filename) {
        // 获取当前文件的绝对路径
        const filedir = path.join(filePath, filename);
        // 根据文件路径获取文件信息，返回一个fs.Stats对象
        fs.stat(filedir, async function (eror, stats) {
          if (eror) {
            console.warn('获取文件stats失败');
          } else {
            const isFile = stats.isFile(); // 是文件
            const isDir = stats.isDirectory(); // 是文件夹
            if (isFile) {
              console.log(filedir);
              await nodepptExec(filedir);
            }
            if (isDir) {
              fileDisplay(filedir); // 递归，如果是文件夹，就继续遍历该文件夹下面的文件
            }
          }
        })
      });
    }
  });
}

console.log('----start fileDisplay---');
fileDisplay('src')
console.log('----end fileDisplay---');
