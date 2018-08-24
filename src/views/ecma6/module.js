// export const testa = 'testa'
// export const testb = 'testb'

const testa = 'testa'
const testb = 'testb'

export {
  testa as appTest1,
  testb as appTest2
}
export default function() {
  console.log('我是一个默认的输出')
}