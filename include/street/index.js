const requete       = new XMLHttpRequest()
const api_key       = "303519b6fef875f7370e2f64f8e4ffda51dddf74"
let contract_name   = "amiens"
const methodeHttp   = "GET"
const url           = "https://api.jcdecaux.com/vls/v1/stations?contract={contract_name}&apiKey={api_key}"

requete.open(methodeHttp, url)

requete.onreadystatechange  = function(){
    console.log(requete.readyState)
}
requete.send()

// https://api.jcdecaux.com/vls/v1/stations?contract={amiens}&apiKey={303519b6fef875f7370e2f64f8e4ffda51dddf74}