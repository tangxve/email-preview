import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';
import inquirer from 'inquirer'

const HTML_FOLDER_PATH = './src/html'; // 存放 HTML 文件的路径

// 读取 HTML 文件内容
const readHTMLFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: 'utf-8' }, (error, htmlContent) => {
      if (error) {
        reject(error);
      } else {
        resolve(htmlContent);
      }
    });
  });
};

const neteaseMail = ''
const qqMail = ''
const outlookMail = ''

const toMail = [neteaseMail, outlookMail, qqMail].filter(v => !!v)

// 使用 nodemailer 发送邮件
const sendEmail = async (htmlContent, htmlFile) => {
  const transporter = nodemailer.createTransport({
    service: '163',
    auth: {
      user: 'ee_review@163.com',
      pass: 'WDBFHBUIDNIVAHSL',
    },
  });

  const mailOptions = {
    from: 'ee_review@163.com',
    to: toMail.join(','),
    subject: htmlFile || '邮件预览',
    html: htmlContent,
  };

  await transporter.sendMail(mailOptions);

  console.log(`Sent ${htmlFile} email to： ${toMail.join('，')} .`);
};

(async () => {
  try {
    // 获取 HTML 文件列表
    const htmlFiles = fs.readdirSync(HTML_FOLDER_PATH).filter((fileName) =>
      fileName.endsWith('.html')
    );

    const choices = [{ name: '全部', value: 'all' }];
    for (const file of htmlFiles) {
      choices.push({ name: file, value: file });
    }

    const promptList = [
      {
        type: 'checkbox',
        message: '请选择要发送的 HTML 文件：',
        name: 'selectedFiles',
        choices,
      }
    ]

    const answers = await inquirer.prompt(promptList)

    const { selectedFiles } = answers

    const isAll = selectedFiles.includes('all')

    const sendHtmlFiles = isAll ? htmlFiles : selectedFiles

    // 循环发送 HTML 文件到不同邮箱
    for (const htmlFile of sendHtmlFiles) {
      const filePath = path.join(HTML_FOLDER_PATH, htmlFile);
      const htmlContent = await readHTMLFile(filePath);

      await sendEmail(htmlContent, htmlFile);
    }
  } catch (error) {
    console.error(error.message);
  }
})();
