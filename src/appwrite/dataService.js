import { conf } from "../conf/conf";
import { Client, Databases,ID } from "appwrite";



class DataService {
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwrite_url)
            .setProject(conf.project_id)
        this.databases=new Databases(this.client )
    }

    async listDocuments (){
        try {
            const databases=await  this.databases.listDocuments(conf.database_id)

            if (!databases){
                console.log("databases is not found!")
            }
            return databases
        } catch (error) {
            throw error
        }
    }

    async createDocument ({title ,slug,article,featuredImage,status,userId}){
        try {
            const databases=await  this.databases.createDocument(conf.database_id,conf.collection_id,slug,{title,article,featuredImage,status,userId})
            if (!databases){
                console.log("document is not created!")
            }
            return databases
        } catch (error) {
            throw error
        }
    }

    async getDocuments (slug){
        try {
            const databases=await  this.databases.getDocument(conf.database_id,conf.collection_id,slug)

            if (!databases){
                console.log("documetn in the database is not found!")
            }
            return databases
        } catch (error) {
            throw error
        }
    }

    async updateDocuments (slug,{title ,article,featuredImage,status}){
        try {
            const databases=await  this.databases.updateDocument(conf.database_id,conf.collection_id,slug,{title ,article,featuredImage,status})

            if (!databases){
                console.log("document in the database is not found!")
            }
            return databases
        } catch (error) {
            throw error
        }
    }

    async deleteDocuments (slug){
        try {
            const databases=await this.databases.deleteDocument(conf.database_id,conf.collection_id,slug)

            if (!databases){
                console.log("document in the database is not found!")
            }
            return true
        } catch (error) {
            console.log("Appwirte delete document : Error ::",error)
            return false
        }
    }

    async getPost(){
        try {
            return await this.databases.getDocument(conf.database_id,conf.collection_id,[Query.equal("status", "active")])
        } catch (error) {
            console.log("Appwrite GetPost : Error ::",error);
        }
    }

    // file uploading

    async uploadFile(file){
        try {
            return await this.bucket.createFile(conf.bucket_id,ID.unique(),file)
        } catch (error) {
            console.log("Appwirte Upload File : Error ::",error)
        }
    }

    async deleteFile(file_id){
        try {
            return await this.bucket.deleteFile(conf.bucket_id,file_id)
        } catch (error) {
            console.log("Appwirte Upload File : Error ::",error)
            return false
        }
    }

    async previewFile(file_id){
        try {
            return await this.bucket.getFilePreview(conf.bucket_id,file_id)
        } catch (error) {
            console.log("Appwirte Upload File : Error ::",error)
            return false
        }
    }
}

const dataService= new DataService();

export default dataService;