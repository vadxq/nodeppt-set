const { exec, execFileSync } = require('child_process');
// 输出当前目录（不一定是代码所在的目录）下的文件和文件夹
exec('nodeppt serve ./src/interestingFE.md', [], (err, stdout, stderr) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
})

const stdout = execFileSync('node', ['-v']);
console.log(stdout);