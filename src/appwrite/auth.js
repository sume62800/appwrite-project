import { conf } from "../conf/conf";
import { Client, Account, ID } from "appwrite";



class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwrite_url)
            .setProject(conf.project_id)
        this.account=new Account(this.client )
    }

    async createAccount ({email,password,name}){
        try {
            const userAccount=await this.account.create(ID.uniques(),email,password,name)
            if (userAccount){
                // call method
                return this.login({email,password})
            } else {
                return userAccount
            }
        } catch (error) {
            throw error
        }
    }

    async  login ({email,password}){
        try {
            return await this.account.createEmailSession(email,password)
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser (){
        try {
            return await this.account.get();
        } catch (error) {
            throw error 
        }

        return null
    }

    async logout (){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            throw error
        }
    }

}

const authService= new AuthService();

export default authService;