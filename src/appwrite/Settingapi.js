import { Client, Databases, ID, Query } from "appwrite";
import Appwriteconf from "./appwrite.config";

class adminsett {
  client;
  sett;

  constructor(){
        this.client = new Client()
        .setEndpoint(Appwriteconf.appwriteendpoint)
        .setProject(Appwriteconf.projectid);

        this.sett = new Databases(this.client)
  }

  async createadmin(headername){
        return await this.sett.createDocument(Appwriteconf.appwritebase, Appwriteconf.admincollid, ID.unique(), {
            headername
        })
  }

  async getoneadmin(docid){
        return await this.blogs.getDocument(Appwriteconf.appwritebase, Appwriteconf.admincollid, docid)
    }

    async deleteadmin(docid){
        return await this.blogs.deleteDocument(Appwriteconf.appwritebase, Appwriteconf.admincollid, docid)
    }

    async updatadmin(docid, {headername,subheader,aboutcontent,aboutheader,aboutsubheader,thoughtheader,subthought}){
        return await this.blogs.updateDocument(Appwriteconf.appwritebase, Appwriteconf.admincollid, docid, {headername,subheader,aboutcontent,aboutheader,aboutsubheader,thoughtheader,subthought})
    }

    async getadmin(){
        return await this.blogs.listDocuments(Appwriteconf.appwritebase, Appwriteconf.admincollid, [
            Query.limit(1),
            Query.orderDesc("$createdAt"),
            Query.equal("active", true)
        ])
    }
  
  
}
const Settbase = new adminsett()
export default Settbase
