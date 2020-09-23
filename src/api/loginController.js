import send from '../config/mailConfig'
import moment from 'moment'

class LoginController {
  constructor() {}
  async forget(ctx){
    const {body} = ctx.request
    try{
      await send({
        code: '1234',
        expire: moment().add(30,'m').format('yyyy-MM-dd hh:mm:ss'),
        email: body.email, //
        user: ''
      })
      ctx.body = {
        code:200,
        msg: 'success'
      }
    }catch(e){}
  }
}

export default new LoginController()