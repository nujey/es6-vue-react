import { RawLocation } from "vue-router";

export default class VueRouter {
  mode: string; // 传入的字符串类型 指示history类别
  history: HashHistory | HTML5History | AbstractHistory; // 实际起作用的对象属性
  fallback: Boolean; // 如果浏览器不支持 history模式回滚为hash模式

  constructor(options: RouterOptions = {}) {
    let mode = options.mode || 'hash'
    this.fallback = mode === 'history' && !supportsPushState
    if (this.fallback) {
      mode = 'hash'
    }
    if (!inBrowser) {
      mode = 'abstract' // 不在浏览器环境下运行的话需要强制abstract模式
    }
    this.mode = mode
    switch(mode) {
      case 'history':
        this.history = new HTML5History(this, options.base)
        break
      case 'hash':
        this.history = new HashHistory(this, options.base, this.fallback)
        break
      case 'abstract':
        this.history = new AbstractHistory(this, options.base)
        break
      default:
        if (process.env.NODE_ENV !== 'production') {
          assert(false, `invalid mode: ${mode}`)
        }
    }
  }
  init(app: any) {
    const history = this.history
    if (history instanceof HTML5History) {
      history.transitionTo(history.getCurrentLocation())
    } else if (history instanceof HashHistory) {
      const setupHashListener = () => {
        history.setupListeners()
      }
      history.transitionTo(
        history.getCurrentLocation(),
        setupHashListener,
        setupHashListener
      )
    }
    history.listen(route => {
      this.apps.forEach((app) => {
        app._route = route
      })
    })
  }
  push(location: RawLocation, onComplete ?: Function, onAbort ?: Function) {
    this.history.push(location, onComplete, onAbort)
  }
  replace(location: RawLocation, onComplete?: Function, onAbort ?: Function) {
    this.history.replace(location, onComplete, onAbort)
  }
}