const { exec, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('----ALL start----');

const cpStatic = () => {
  setTimeout(() => {
    console.log('----start cp css---');
    spawn('cp', ['-r', 'dist/css', 'build/css'])
  
    console.log('----start cp img---');
    spawn('cp', ['-r', 'dist/img', 'build/img'])
  
    console.log('----start cp js---');
    spawn('cp', ['-r', 'dist/js', 'build/js'])
  
    console.log('----start cp index---');
    spawn('cp', ['-r', 'index.html', 'build/index.html'])
  
    console.log('----start cp demo---');
    spawn('cp', ['-r', 'demo', 'build/demo'])
  
    console.log('----ALL End----');
  }, 1000);
}

const addGA = async (src) => {
  console.log(`----start addGA ${src}---`);
  const srcArg = src.split('/');
  const mdFilePath = srcArg[srcArg.length - 1];
  const htmlFilePath = `${mdFilePath.split('.')[0]}.html`;
  console.log(htmlFilePath);

  const readStream = fs.createReadStream(`dist/${htmlFilePath}`);
  const writeStream = fs.createWriteStream(`build/${htmlFilePath}`);

  console.log(`----start readStream build ${src}---`);
  await readStream.on('data', function (data) {
    const htmlString = data.toString()
    const dataString = htmlString.replace('</body></html>', '<script async src="https://www.googletagmanager.com/gtag/js?id=UA-83694330-1"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "UA-83694330-1");</script></body></html>')
    writeStream.write(dataString);
    console.log(`----end writeStream build ${src}---`);
  });
  console.log(`----end addGA ${src}---`);
}

/**
 * build
 * @param src build文件路径
 */
const nodepptExec = async (src) => {
  console.log('nodeppt');
  console.log(`----start nodeppt build ${src}---`);
  await exec(`nodeppt build ${src}`, [], async (err, stdout, stderr) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`----end nodeppt build ${src}---`);
    setTimeout(() => {
      addGA(src)
    }, 100);
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

  cpStatic()
}

console.log('----start fileDisplay---');
fileDisplay('src')
console.log('----end fileDisplay---');
