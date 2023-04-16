// 引入所需模块
import fs from 'fs';
import path from 'path';
import mjml2html from 'mjml';

// 配置文件路径
const sourceDir = './src/mjml/'; // 源文件夹路径
const targetDir = './src/html/'; // 目标文件夹路径

// 获取源文件夹下的 MJML 文件列表
const getMjmlFiles = () => {
  const files = fs.readdirSync(sourceDir);
  return files.filter((file) => path.extname(file) === '.mjml');
};

// 编译 MJML 文件，并将生成的 HTML 文件保存到目标文件夹
const compileMjmlFiles = (files) => {
  files.forEach((file) => {
    const filePath = path.join(sourceDir, file);
    const mjml = fs.readFileSync(filePath, 'utf8');
    const { html } = mjml2html(mjml);
    const targetPath = path.join(targetDir, `${path.parse(file).name}.html`);

    fs.writeFileSync(targetPath, html);

    console.log(`${file} compiled successfully!`);
  });
};

// 运行主程序
compileMjmlFiles(getMjmlFiles());
