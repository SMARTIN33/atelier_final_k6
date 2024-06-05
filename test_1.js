import http from "k6/http";
import { check } from "k6";

/**
 * This is the options object for test 1: automatically used when launhing the test
 *  vus: number of virtual users
 *  iterations: number of iterations for each virtual user
 *  Only one scenario
 * */ 
export const options = {
    vus: 10,
    iterations: 20
};

/**
 * This is the test function called by k6 runner
 * One test assertion is made on the response status code
 * */
export default function () {
    // Url under test
    const reponse = http.get("http://test.k6.io");

    // Status verification
    check(reponse, { "code status": (r) => r.status == 200 });
}
