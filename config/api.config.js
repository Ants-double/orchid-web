const isPro=Object.is(process.env.NODE_ENV,'production')

module.exports={
    baseUrl:isPro ? 'http://192.168.15.208:5588':'http://192.168.15.168:5588'
}