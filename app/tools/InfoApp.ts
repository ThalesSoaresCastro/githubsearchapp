import NetInfo from "@react-native-community/netinfo";




NetInfo.fetch().then(state => {
    console.log("Connection type", state.type);
    console.log("Is connected?", state.isConnected);
});

const unsubscribe = NetInfo.addEventListener(state => {
    console.log("Connection type", state.type);
    console.log("Is connected?", state.isConnected);
});

// Unsubscribe
unsubscribe();


const ValidateNet = () =>{
    let resp;
    NetInfo.addEventListener(state =>{
        resp = state.isConnected? true : false
    })

    return resp;
}

export default ValidateNet;