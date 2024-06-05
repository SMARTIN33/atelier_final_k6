import http from "k6/http";
import { check } from "k6";

/**
 * This is the options object for test 3: automatically used when launching the test
 *  thresholds: checks if rate>0.9 
 *  The goal is to perform a continuous ramp up of users until the rate is above 0.9,
 *  then it fails so we can now the limit of users
 *  Only one scenario
 * */ 
export const options = {
    thresholds : {
        checks : [
            {
                threshold : 'rate>0.9',
                abortOnfail: true 
            }
        ]
    },
    stages: [
        { duration: '3m', target: 2000 }
    ]
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