import svgCaptcha from 'svg-captcha'
class DemoController {
  constructor() {}
  async getCaptcha(ctx) {
    const newCaptcha = svgCaptcha.create({
      noise:Math.floor(Math.random()*5),
      ignoreChars: '0o1i',
      // background: '#cc9966',
      width:100,
      height:35
    })
    ctx.body = {
      code:200,
      msg: newCaptcha.data
    }
  }
}

export default new DemoController()
