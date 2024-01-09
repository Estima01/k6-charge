import http from 'k6/http'
import { check, sleep } from 'k6'
import { htmlReport } from './bundle.js'

// Teste de carga
// Parametros de execução
// 10 vus por 10 segundos
// manter 10 usuários por 10 segundo
// decaindo para 0 usuários ao longo de 10 segundo
//duração de requisição de 500ms
//taxa de erro de 1%
//taxa de sucesso de 95%



export function handleSummary(data) {
    return {
        'index.html': htmlReport(data)
    }
}

export const options = {
    stages: [
        {duration: '10s', target: 10,},
        {duration: '10s', target: 10,},
        {duration: '10s', target: 0,}
   ],
    
}
export default function () {

    const url = 'http://test-api.k6.io'

    let res = http.get(url)

    check(res, {
        'is status 200': (r) => r.status === 200
    })
    sleep(1)
}