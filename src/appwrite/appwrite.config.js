const Appwriteconf = {
    projectid: String(import.meta.env.VITE_APPWRITE_PROJECTID),
    appwriteendpoint: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
    appwritebase: String(import.meta.env.VITE_BASE_ID),
    blogcollid: String(import.meta.env.VITE_BLOG_COLLECTION_ID),
    admincollid: String(import.meta.env.VITE_ADMIN_COLLECTION_ID),
}

export default Appwriteconf
