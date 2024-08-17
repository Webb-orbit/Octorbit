import { Client, Databases, ID } from "appwrite";
import Appwriteconf from "./appwrite.config";

class blogclass{
    constructor(){
        this.client = new Client()
        this.client
        .setEndpoint(Appwriteconf.appwriteendpoint)
        .setProject(Appwriteconf.projectid);

        this.blogs = new Databases(this.client)
    }

    async createblog(title, description, content, creator, date){
        return await this.blogs.createDocument(Appwriteconf.appwritebase, Appwriteconf.blogcollid, ID.unique(), {
            title, description, content, creator, date
        })
    }

    async getoneblog(docid){
        return await this.blogs.getDocument(Appwriteconf.appwritebase, Appwriteconf.blogcollid, docid)
    }

    async deleteblog(docid){
        return await this.blogs.deleteDocument(Appwriteconf.appwritebase, Appwriteconf.blogcollid, docid)
    }

    async updateblog(docid, {title, description, content, creator, views, likes}){
        return await this.blogs.updateDocument(Appwriteconf.appwritebase, Appwriteconf.blogcollid, docid, {title, description, content, creator, views, likes})
    }
}

const Blogbase = new blogclass()
export default Blogbase