function one() {
  console.log('1111')
}
async function two() {
  let tempres = 'default'
  await function() {
    return new Promise((resolve, reject) => {
      tempres = 'promise'
      resolve()
    })
    // setTimeout(() => {
    //   tempres = 'timeout'
    // }, 200)
  }()
  console.log(tempres)
}

async function three(str = 'three') {
  await two()
  console.log(str)
}

// three()

function timeout (ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
  })
}
async function timeout2(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(ms)
    }, 1000)
    resolve()
  })
}
async function asyncPrint(value, ms) {
  await timeout(ms)
  await timeout2(ms)
  // let [t1, t2] = await Promise.all([timeout(ms), timeout2(ms)])
  console.log(value)
}

asyncPrint('hello world', 500)


async function fn(args) {
  //
}

function fn(args) {
  return spawn(function * () {
    
  })
}


