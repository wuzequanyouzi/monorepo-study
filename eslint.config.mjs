import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ['node_modules/', 'pnpm-lock.yaml', './husky/', './gitignore'],
  },
  eslintConfigPrettier, // 关闭所有可能干扰 Prettier 规则的 ESLint 规则
  eslintPluginPrettierRecommended, // 将 Prettier 规则转换为 ESLint 规则
);
