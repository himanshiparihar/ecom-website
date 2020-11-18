import config from '../config.json';

class OrderApi {
    constructor(){
        this.endpoint = config.production.dburl;
    }
    fetchOrders = async ({userId, userToken}) => {
        try{    
            let orders = await fetch(`${this.endpoint}/order/${userId}`,{
                headers: {'Authorization':"Bearer " + userToken}
            }).then(response => {
                    try{
                        if (response.status >= 200 && response.status < 300) 
                            return response;
                        else 
                            throw response; 
                    }catch(error){throw error}
                }).then(response => response.json());
            return orders;
        }catch(error) {
            throw error;
        }
    }
    createOrder = async ({userId, userToken, items}) => {
        try{
            let order = await fetch(`${this.endpoint}/order/`,{
                    method: "POST",
                    headers: {'Authorization':"Bearer " + userToken},
                    body: JSON.stringify({
                        userId,
                        items,
                    })
                }).then(response => {
                    try{
                        if (response.status >= 200 && response.status < 300) 
                            return response;
                        else 
                            throw response; 
                    }catch(error){throw error}
                }).then(response => response.json());
            return order;
        }catch(error) {
            throw error;
        }
    }
    cancelOrder= async ({id, userToken}) => {
        try{    
            let order = await fetch(`${this.endpoint}/order/${id}`,{
                method: "POST",
                headers: {'Authorization':"Bearer " + userToken},
            }).then(response => {
                try{
                    if (response.status >= 200 && response.status < 300) 
                        return response;
                    else 
                        throw response; 
                }catch(error){throw error}
            }).then(response => response.json());
            return order;
        }catch(error) {
            throw error;
        }
    }
}

export default new OrderApi();