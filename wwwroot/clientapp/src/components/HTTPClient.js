let baseURL = "";
import  "regenerator-runtime";

const HTTPClient = {

    get: (action) => {
       

        var config = {
            method: "GET",
            credentials: 'include',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json; charset=utf-8"
            }
        };

        let p = fetch(baseURL + action, config);

        return p;
    },

    getAsync: async (action) => {

        var config = {
            method: "GET",
            credentials: 'include',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json; charset=utf-8"
            }
        };

        let p = await fetch(baseURL + action, config);



        return p;
    },    

    delete: (action) => {

        var config = {
            method: "DELETE",
            credentials: 'include',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json; charset=utf-8"
            }
        };

        let p = fetch(baseURL + action, config);


        return p;
    },

    post: (action, body) => {

        var config = {
            method: "POST",
            credentials: 'include',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json; charset=utf-8"
            },
            body: body !== null ? JSON.stringify(body) : null
        };

        let p = fetch(baseURL + action, config);


        return p;
    },

    postAsync: async (action, body) => {

        var config = {
            method: "POST",
            credentials: 'include',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json; charset=utf-8"
            },
            body: body !== null ? JSON.stringify(body) : null
        };

        let p = await fetch(baseURL + action, config);

        return p;
    },

    put: (action, body) => {

        var config = {
            method: "PUT",
            credentials: 'include',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json; charset=utf-8"
            },
            body: body !== null ? JSON.stringify(body) : null
        };

        let p = fetch(baseURL + action, config);

        return p;
    },

    putAsync: async (action, body) => {

        var config = {
            method: "PUT",
            credentials: 'include',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json; charset=utf-8"
            },
            body: body !== null ? JSON.stringify(body) : null
        };

        let p = await fetch(baseURL + action, config);

        return p;
    },

    postFormData: (action, formData) => {

        var config = {
            method: "POST",
            credentials: 'include',
            headers: {
                "Accept": "application/json",
            },
            body: formData
        };

        let p = fetch(baseURL + action, config);

        return p;
    },
 
}

export default HTTPClient;