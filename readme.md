# run test 1
Establish with a k6 run the number of requests that the server can handle within the scope of 10 users for 20 seconds.

```k6 run test_1.js```

# run test 2
Verify that the server will respond in less than 400ms in 90% of cases in the context of 20 users making a total of 300 requests.

```k6 run test_2.js```

# run test 3
Determine the number of users at which the system can no longer ensure a response time of less than 300ms for 95% of the requests.

```k6 run test_3.js```