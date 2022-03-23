import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true; 
axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('auth_token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});



const serviceApi = () => {

        let baseUrl = "localhost:8080";
        let url = '/products';
        let url2 = '/users';
        let urlSignin = '/auth/signup';
        let urlLogin = '/auth/signin';


        const get = async () => {
            const res = await axios.get(url);
            return res;
        };

        const get2 = async () => {
            const res = await axios.get(url2);
            return res;
        };
    
        const post = async (data) => {
            const res = await axios.create(url, data);
            return res;
        };
    
        const destroy = async (id) => {
            let urlID = `${url}/${id}`;
            const res = await axios.delete(urlID);
            return res;
        };
        const show = async (id) => {
            let urlID = `${url}/${id}`;
            const res = await axios.get(urlID);
            return res;
        }
    
    
        const signin = async (data) => {
            const res = await axios.post(urlSignin, data);
            return res;
        };
    
        const login = async (data) => {
            const res = await axios.post(urlLogin, data);
            return res;
        };
    
    
        return {
            get,
            get2,
            post,
            destroy,
            show,
            signin,
            login,
            url,
            baseUrl
        };
       
}

export default serviceApi