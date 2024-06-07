import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    thresholds: {        
            http_req_duration: [{threshold: "med <= 400"}]        
    },
    scenarios: {
        shared: {
            exec: "test1",
            executor: 'shared-iterations',
            vus: 5,
            iterations: 1000
        },
        perVus: {
            exec: "test2",
            executor: 'per-vu-iterations',
            vus: 5,
            iterations: 10,
            maxDuration: "15s",
            startTime: '5'
        }
    }
}


export function test1() {
    const response = http.get('https://test-api.k6.io');   
}

export function test2() {
    const response = http.get('https://test-api.k6.io');   
}