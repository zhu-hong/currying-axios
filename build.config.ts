import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['index'],
  outDir: 'dist',
  clean: true,
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
  },
})