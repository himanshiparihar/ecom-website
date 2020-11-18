import config from '../config.json';

class CategoryApi {
    constructor(){
        this.endpoint = config.production.dburl;
    }
    fetchCategory= async () => {
        try{    
            let categories = await fetch(`${this.endpoint}/category`).then(response => {
                    try{
                        if (response.status >= 200 && response.status < 300) 
                            return response;
                        else 
                            throw response; 
                    }catch(error){throw error}
                }).then(response => response.json());
            return categories;
        }catch(error) {
            throw error;
        }
    }
}

export default new CategoryApi();