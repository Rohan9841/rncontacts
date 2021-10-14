import storage from '@react-native-firebase/storage';

export default (file) => (onSuccess) => (onError) => {
    const path = "contact-pictures/user/777/" + file.creationDat || file.path; //we are using creationgDate because it'll be unique
    const ref = storage().ref(path);

    const task = ref.putFile(file.path);

    task.then(async () => {
        const url = await ref.getDownloadURL();
        onSuccess(url);
        console.log("url", ur);
    }).catch(error => {
        onError(error);
    })
}