import { Client, Account } from "appwrite";
import Appwriteconf from "./appwrite.config";

class admin{
    constructor(){
        this.client = new Client()
        this.client
        .setEndpoint(Appwriteconf.appwriteendpoint)
        .setProject(Appwriteconf.projectid);

        this.account = new Account(this.client)
    }

    async getcurrentaccount(){
        return await this.account.get()
    }

    async loginadmin(email, password){
        return await this.account.createEmailPasswordSession(email, password)
    }

    async logoutadmin(){
        return await this.account.deleteSession("current")
    }
}

const Admin = new admin()
export default Admin