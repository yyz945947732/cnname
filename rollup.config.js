import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import url from '@rollup/plugin-url';
import json from '@rollup/plugin-json'
import pkg from './package.json' assert { type: 'json' };

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
    },
  ],
  plugins: [
    nodeResolve(),
    external(),
    json(),
    url({ exclude: ['**/*.svg'] }),
    typescript(),
    commonjs({ extensions: ['.js', '.ts'] }),
  ],
};
