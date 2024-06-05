import http from "k6/http";
import { check } from "k6";

/**
 * This is the options object for test 2: automatically used when launching the test
 *  vus: number of virtual users
 *  iterations: number of iterations for each virtual user
 *  thresholds: thresholds on the response time: specified percentile should be bellow a given time in ms
 *  Only one scenario
 * */ 
export const options = {
    vus: 20,
    thresholds: {
        http_req_duration: ['p(90)<=400'],
    },
    iterations: 300
};

/**
 * This is the test function called by k6 runner
 * One test assertion is made on the response status code
 * */
export default function () {
    // Url under test
    const res = http.get('http://test.k6.io');

    // Status verification
    check(res, { 'status was 200': (r) => r.status == 200 });
};  
