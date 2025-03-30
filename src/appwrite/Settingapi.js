import { Client, Databases, ID, Query } from "appwrite";
import Appwriteconf from "./appwrite.config";

class adminsett {
  client;
  sett;

  constructor(){
        this.client = new Client()
        this.client
        .setEndpoint(Appwriteconf.appwriteendpoint)
        .setProject(Appwriteconf.projectid);

        this.sett = new Databases(this.client)
  }
}
const Settbase = new adminsett()
export default Settbase
