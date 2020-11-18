import config from '../config.json';

class UserApi {
    constructor(){
        this.endpoint = config.production.dburl;
    }
    customerSignUp = async ({email, password}) => {
        try{
            let user = await fetch(`${this.endpoint}/auth/register`,{
                    method: "POST",
                    body: JSON.stringify({
                        email,
                        password,
                    })
                }).then(response => {
                    try{
                        if (response.status >= 200 && response.status < 300) 
                            return response;
                        else 
                            throw response; 
                    }catch(error){throw error}
                }).then(response => response.json());
            return user;
        }catch(error) {
            throw error;
        }
    }

    customerSignIn = async ({email, password}) => {
        try{    
            let  user = await fetch(`${this.endpoint}/auth/login`,{
                    method: "POST",
                    body: JSON.stringify({
                        email,
                        password,
                    })
                }).then(response => {
                    try{
                        if (response.status >= 200 && response.status < 300) 
                            return response;
                        else 
                            throw response; 
                    }catch(error){throw error}
                }).then(response => response.json());
            return user;
        }catch(error) {
            throw error;
        }
    }

    createCustomer = async ({Name, Phoneno, Address, City, State, Zipcode, email}) => {
        try{    
            let customer = await fetch(`${this.endpoint}/customer`,{
                    method: "POST",
                    body: JSON.stringify({
                        email,
                        name: Name, 
                        phoneno: Phoneno, 
                        address: Address, 
                        city: City, 
                        state: State, 
                        zipcode: Zipcode,
                    })
                }).then(response => {
                    try{
                        if (response.status >= 200 && response.status < 300) 
                            return response;
                        else 
                            throw response; 
                    }catch(error){throw error}
                }).then(response => response.json());
            return customer;
        }catch(error) {
            throw error;
        }
    }
}

export default new UserApi();