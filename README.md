
To start the React server, go inside the 'my-app' folder.
Then, open a terminal and run the following command 
>>npm start

Once the project is built, it will automatically open a web browser with the web page.

Problem in hand and the solution - 
While performing GET request on the API - https://postman-echo.com/get?foo1=bar1&foo2=bar2, 
a Cross-Origin Resource Sharing (CORS) error is thrown.
To deal with this error, a proxy directed to https://postman-echo.com was created and configured. 
This helps remove the CORS block and the contents of API can be fetched. 
In this case only 'args' are printed, because other JSON elements contain sensitive data.
