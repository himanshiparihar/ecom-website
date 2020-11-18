import config from '../config.json';

class ProductApi {
    constructor(){
        this.endpoint = config.production.dburl;
    }
    fetchProductList=async ({categoryId}) => {
        try{    
            let categories = await fetch(`${this.endpoint}/products/${categoryId}`).then(response => {
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
    fetchProduct= async ({id}) => {
        try{    
            let product = await fetch(`${this.endpoint}/product/${id}`).then(response => {
                    try{
                        if (response.status >= 200 && response.status < 300) 
                            return response;
                        else 
                            throw response; 
                    }catch(error){throw error}
                }).then(response => response.json());
            return product;
        }catch(error) {
            throw error;
        }
    }
    filterProduct = async ({category_id, sub_category}) => {
        try{
            let product = await fetch(`${this.endpoint}/products/${category_id}/${sub_category}`).then(response => {
                try{
                    if (response.status >= 200 && response.status < 300) 
                        return response;
                    else 
                        throw response; 
                }catch(error){throw error}
            }).then(response => response.json());
            return product;
        }catch(error) {
            throw error;
        }
    }
}

export default new ProductApi();