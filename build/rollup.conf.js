import buble from 'rollup-plugin-buble'
import json from 'rollup-plugin-json'
import nodeResolve from 'rollup-plugin-node-resolve'
import { standard as banner } from './rollup.conf.banner'

const base = {
	banner,
	input: 'src/index.js',
	plugins: [json(), buble(), nodeResolve()]
}

const es = Object.assign({}, base, {
	external: ['is-dom-node'],
	output: { format: 'es', file: 'dist/is-dom-node-list.es.js' }
})

const umd = Object.assign({}, base, {
	output: { format: 'umd', file: 'dist/is-dom-node-list.js', name: 'isDomNodeList' }
})

export default [es, umd]
