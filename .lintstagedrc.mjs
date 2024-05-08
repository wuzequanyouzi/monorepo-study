import { ESLint } from 'eslint';

const removeIgnoredFile = async (files) => {
  const eslint = new ESLint();
  const ignoredFiles = await Promise.all(files.map((file) => eslint.isPathIgnored(file)));
  const filteredFiles = files.filter((_, i) => !ignoredFiles[i]);
  return filteredFiles.join(' ');
};

export default {
  '*': async (files) => {
    const filesToLint = await removeIgnoredFile(files);
    return [`eslint ${filesToLint} --max-warnings=0`];
  },
};
