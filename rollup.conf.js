import buble from 'rollup-plugin-buble'
import json from 'rollup-plugin-json'
import nodeResolve from 'rollup-plugin-node-resolve'
import { standard as banner } from './rollup.conf.banner'

export default {
	banner,
	input: 'index.js',
	plugins: [json(), nodeResolve({ jsnext: true, main: true }), buble()],
	output: [
		{ format: 'umd', file: 'dist/is-dom-node-list.js', name: 'isDomNodeList' },
		{ format: 'es', file: 'dist/is-dom-node-list.es.js' }
	]
}
