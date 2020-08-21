import config from './config'
import {get,post} from './http'

const api = {
  userLogin(data){
    console.log(data)
    return get(config.API_HOST+'/user/login',data)
  }
}


export default api
