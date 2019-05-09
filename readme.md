**API Documentation**
----

* **URL**

  /user/create

  "For Register New User"

* **Method:**

  `POST`
  
*  **BODY**
 
   ```javascript
    {
	"facebookID": "JohnDoe",
    "age": "20",
    "friends": ["him", "her", "he", "john", "Doe"],
    "username": "John Doe",
	"password": "Password"
    }
   ```

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```javascript
        {
            "message": "New User Has Created",
            "data": {
                "friends": [
                    "him",
                    "her",
                    "he",
                    "joe",
                    "Doe"
                ],
                "_id": "5cd28e2bff44631534a2fb4c",
                "facebookID": "JohnDoe",
                "username": "JohnDon",
                "password": "Password",
                "age": 20,
                "created_at": "2019-05-08T08:07:07.592Z",
                "__v": 0
            }
        }
    ```
 
* **Error Response:**

  * **Code:** 422 INVALID REQUEST <br />
    **Content:** 
    ```javascript
    {
    "message": "Your Request is Not Valid",
    "errors": [
        {
            "location": "body",
            "param": "facebookID",
            "value": "",
            "msg": "facebook ID must be filled"
        },
        {
            "location": "body",
            "param": "username",
            "value": "",
            "msg": "username must be exist"
        },
        {
            "location": "body",
            "param": "password",
            "value": "nm",
            "msg": "Password must be more than 8 character"
        },
        {
            "location": "body",
            "param": "age",
            "value": "lkkl",
            "msg": "age must be in number"
        }
    ]
    }
    ```

* **URL**

  /user/getAll

  "For Get All User Information"

* **Method:**

  `GET`
  
*  **BODY**
 
   None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```javascript
        {
            "message": "Found All Users",
            "data": [
                {
                    "_id": "5cd149c59966b437b8d80dfe",
                    "username": "Demo",
                    "password": "Password",
                    "__v": 0
                }
            ]
        }
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SEVER ERROR <br />
    **Content:** 
    ```javascript
    {
    "message": "Internal Server Error"
    }
    ```

* **URL**

  /user/match

  "For Find Two Matching People Based On Age And Mutual Friends"

* **Method:**

  `GET`

*  **BODY**
 
   None

* **Query Params**

  **content:** `{age: 20, currentUser: John Doe}`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```javascript
        {
            "message": "Found Match Poeple",
            "data": [
                {
                    "user": {
                        "friends": [
                            "him",
                            "her",
                            "he",
                            "she"
                        ],
                        "_id": "5cd246599c119344780d91d0",
                        "facebookID": "MyFacebook",
                        "username": "My Self",
                        "password": "Password",
                        "age": 20,
                        "created_at": "2019-05-08T03:00:41.941Z",
                        "__v": 0
                    },
                    "matchingScore": 4
                },
                {
                    "user": {
                        "friends": [
                            "him",
                            "her",
                            "he"
                        ],
                        "_id": "5cd246a39c119344780d91d1",
                        "facebookID": "OurFacebook",
                        "username": "Our",
                        "password": "Password",
                        "age": 20,
                        "created_at": "2019-05-08T03:01:55.696Z",
                        "__v": 0
                    },
                    "matchingScore": 3
                }
            ]
        }
    ```

* **Error Response:**

  * **Code:** 500 INTERNAL SEVER ERROR <br />
    **Content:** 
    ```javascript
    {
    "message": "Internal Server Error"
    }
    ```