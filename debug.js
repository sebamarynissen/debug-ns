import createDebug from 'debug';

const { searchParams, search } = new URL(import.meta.url);
const ns = [...searchParams].find(([key, value]) => value === '');
if (!ns) {
	console.warn(`No namespace found in url search params "${search}" when importing debug-ns. Usage is: import debug from 'debug-ns/?{NAMESPACE}';`);
}
export default createDebug(ns ? ns[0] : '');
