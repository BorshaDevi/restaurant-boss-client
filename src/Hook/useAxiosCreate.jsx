import axios from "axios";
 const AxiosCreate=axios.create({
    baseURL:'http://localhost:5000'
})
const useAxiosCreate = () => {
    return AxiosCreate;
};

export default useAxiosCreate;