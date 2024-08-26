import { Client, Databases, ID, Query } from "appwrite";
import Appwriteconf from "./appwrite.config";

class blogclass{
    constructor(){
        this.client = new Client()
        this.client
        .setEndpoint(Appwriteconf.appwriteendpoint)
        .setProject(Appwriteconf.projectid);

        this.blogs = new Databases(this.client)
    }

    async createblog(title, description, content, creator, date, active){
        return await this.blogs.createDocument(Appwriteconf.appwritebase, Appwriteconf.blogcollid, ID.unique(), {
            title, description, content, creator, date, active
        })
    }

    async getoneblog(docid){
        return await this.blogs.getDocument(Appwriteconf.appwritebase, Appwriteconf.blogcollid, docid)
    }

    async deleteblog(docid){
        return await this.blogs.deleteDocument(Appwriteconf.appwritebase, Appwriteconf.blogcollid, docid)
    }

    async updateblog(docid, {title, description, content, creator, active}){
        return await this.blogs.updateDocument(Appwriteconf.appwritebase, Appwriteconf.blogcollid, docid, {title, description, content, creator, active})
    }

    async findactiveorunacblogs(param){
        console.log(param);
        
        return await this.blogs.listDocuments(Appwriteconf.appwritebase, Appwriteconf.blogcollid, [
            Query.equal("active", param),
            Query.limit(5),
            Query.orderDesc("$createdAt"),
        ] )
    }
    async findactiveorunacblogsnext(param, lastid){
        return await this.blogs.listDocuments(Appwriteconf.appwritebase, Appwriteconf.blogcollid, [
            Query.limit(5),
            Query.orderDesc("$createdAt"),
            Query.equal("active", param),
            Query.cursorAfter(lastid),
        ] )
    }

    async firstlistblogs(){
        return await this.blogs.listDocuments(Appwriteconf.appwritebase, Appwriteconf.blogcollid, [
            Query.limit(5),
            Query.orderDesc("$createdAt"),
            Query.equal("active", true)
        ])
    }

    async listblogs(lastid){
        return await this.blogs.listDocuments(Appwriteconf.appwritebase, Appwriteconf.blogcollid, [
            Query.limit(5),
            Query.orderDesc("$createdAt"),
            Query.cursorAfter(lastid),
        ])
    }

    async firstlistblogsdashboard(){
        return await this.blogs.listDocuments(Appwriteconf.appwritebase, Appwriteconf.blogcollid, [
            Query.limit(20),
            Query.orderDesc("$createdAt")
        ])
    }

    async firstoneblog(){
        return await this.blogs.listDocuments(Appwriteconf.appwritebase, Appwriteconf.blogcollid, [
            Query.limit(1),
            Query.orderDesc("$createdAt"),
            Query.equal("active", true)
        ])
    }

    async searchonblogs(keyword){
        return await this.blogs.listDocuments(Appwriteconf.appwritebase, Appwriteconf.blogcollid,[
            Query.search("title", keyword),
            Query.limit(2),
            Query.orderDesc("$createdAt")
        ])
    }

    async searchnextonblogs(keyword,lastid){
        return await this.blogs.listDocuments(Appwriteconf.appwritebase, Appwriteconf.blogcollid,[
            Query.search("title", keyword),
            Query.orderDesc("$createdAt"),
            Query.limit(20),
            Query.cursorAfter(lastid),
        ])
    }

}

const Blogbase = new blogclass()
export default Blogbase