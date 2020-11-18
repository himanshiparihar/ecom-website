import config from '../config.json';

class CartApi {
    constructor(){
        this.endpoint = config.production.dburl;
    }
    fetchCart= async ({userId, userToken}) => {
        try{    
            let cart = await fetch(`${this.endpoint}/cart/${userId}`,{
                headers: {'Authorization':"Bearer " + userToken}
            }).then(response => {
                    try{
                        if (response.status >= 200 && response.status < 300) 
                            return response;
                        else 
                            throw response; 
                    }catch(error){throw error}
                }).then(response => response.json());
            return cart;
        }catch(error) {
            throw error;
        }
    }
    createCart = async ({userId, item,quantity, userToken}) => {
        try{
            let cart = await fetch(`${this.endpoint}/cart/`,{
                    method: "POST",
                    headers: {'Authorization':"Bearer " + userToken},
                    body: JSON.stringify({
                        user_id:userId,
                        item: item,
                        quantity: String(quantity),
                    })
                }).then(response => {
                    try{
                        if (response.status >= 200 && response.status < 300) 
                            return response;
                        else 
                            throw response; 
                    }catch(error){throw error}
                }).then(response => response.json());
            return cart;
        }catch(error) {
            throw error;
        }
    }
    updateItem= async ({id, quantity, userToken}) => {
        try{    
            let cart = await fetch(`${this.endpoint}/cart/${id}`,{
                method: "POST",
                headers: {'Authorization':"Bearer " + userToken},
                body: JSON.stringify({
                    quantity: String(quantity),
                })
            }).then(response => {
                try{
                    if (response.status >= 200 && response.status < 300) 
                        return response;
                    else 
                        throw response; 
                }catch(error){throw error}
            }).then(response => response.json());
            return cart;
        }catch(error) {
            throw error;
        }
    }
    deleteItem =async ({id, userToken}) => {
        try{    
            let cart = await fetch(`${this.endpoint}/cart/${id}`,{
                method: "DELETE",
                headers: {'Authorization':"Bearer " + userToken},
            }).then(response => {
                try{
                    if (response.status >= 200 && response.status < 300) 
                        return response;
                    else 
                        throw response; 
                }catch(error){throw error}
            }).then(response => response.json());
            return cart;
        }catch(error) {
            throw error;
        }
    }
    clearCart =async ({userId, userToken}) => {
        try{    
            let cart = await fetch(`${this.endpoint}/cart`,{
                method: "DELETE",
                body:JSON.stringify({
                    userId
                }),
                headers: {'Authorization':"Bearer " + userToken},
            }).then(response => {
                try{
                    if (response.status >= 200 && response.status < 300) 
                        return response;
                    else 
                        throw response; 
                }catch(error){throw error}
            }).then(response => response.json());
            return cart;
        }catch(error) {
            throw error;
        }
    }
}

export default new CartApi();