import axios from "axios"


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


const AxiosAPI = {
    getUsers (currentPage,pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then (responce => {
            return responce.data
        })
    },
    subscribeUser(id){
        return instance.post(`follow/${id}`)
    },
    deleteUser(id){
        return instance.delete(`follow/${id}`)
    },
    authorized(){
        return instance.get(`auth/me`)
    },
    sendDataAuthorized(email,password,rememberMe){
        return instance.post(`auth/login`, {
            email: email,
            password: password,
            rememberMe: rememberMe
        })
    },
    deleteDataAuthorized(){
        return instance.delete(`auth/login`)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    setStatus(status){
        return instance.put(`profile/status`, {
            status: status
        })
    },
    
   
}




export {AxiosAPI}