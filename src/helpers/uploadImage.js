import storage from '@react-native-firebase/storage';

export default (file) => (onSuccess) => (onError) => {
    //This is the path in the firebase that this file will be at.
    const path = `contact-pictures/user/777/${file.modificationDate || file.path}}`; //we are using creationDate because it'll be unique
    //to upload a picture, we need a reference to which we upload to
    const ref = storage().ref(path);

    //task is a process that will tell us what's happening when we are uploading the picture
    //putFile takes in the selectedImage file path
    const task = ref.putFile(file.path);

    task.then(async () => {
        const url = await ref.getDownloadURL();
        onSuccess(url);
        console.log("url in uploadImage", url);
    }).catch(error => {
        onError(error);
    })
}