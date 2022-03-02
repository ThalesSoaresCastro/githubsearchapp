import React,{
    createContext,
    useEffect,
    useState,
} from "react";


import AsyncStorage from '@react-native-async-storage/async-storage';

type TUser = {
    id: number;
    login: string;
    avatar_url: string;
    repos_url: string;
};


type UserType = {
    user: TUser | null;
    listUser: TUser[] | [];
    SetUser: (user:TUser | null ) => Promise<void>;
    AddUser: (listU: Array<TUser> | any ) => Promise<boolean>;
    RemoveUser: (listU: Array<TUser> | any ) => Promise<void>;

};


const UserContext = createContext<UserType>({} as UserType);


export const UserProvider: React.FC = ({children}) =>{

    const[user, SetUserProfile] = useState<TUser | null>(null);
    const[listUser, SetLUser] = useState<Array<TUser> | []>([]);

    
    useEffect(()=>{
        getStorage()
    },[]);

    useEffect(()=>{
        Storage()
    },[listUser]);


    async function Storage() {
        try{
            if(listUser && listUser.length > 0){
                await AsyncStorage.setItem('@storage_users', JSON.stringify(listUser));
            }
        }catch(e){
            console.log('error: ',e);
        }
    }

    async function getStorage() {
        try{
            const SLUser = await AsyncStorage.getItem('@storage_users');
            if(SLUser !== null){
                SetLUser(JSON.parse(SLUser));
            }
        }catch(e){
            console.log('Get Storage Error: ', e);
        }
    }

    async function mergeStorage(){
        try{
            await AsyncStorage.mergeItem('@storage_users', JSON.stringify(listUser));
        }catch(e){
            console.log('Merge Storage Error: ', e);
        }
    }



    const validateUser = async(new_user: TUser)=>{
        if (listUser.length == 0) return false;
        let listU = listUser.filter((item:TUser) => item.id === new_user.id)
        return listU.length > 0? true : false; 
    };

    async function AddUser(new_user: TUser){
        if(!new_user) return false;

        if( await validateUser(new_user)) return false;
        
        SetLUser([...listUser, new_user]);
        return true;
           
    }

    async function RemoveUser(obj_user: TUser){
        if(obj_user.id && listUser){
            let arrUser:Array<TUser> = listUser.filter((item:TUser) => item.id !== obj_user.id );

            SetLUser(arrUser);
        }
    }


    async function SetUser(new_user:TUser){
        SetUserProfile(new_user);
    };

    return(
        <UserContext.Provider value={{user:user, listUser: listUser, SetUser, AddUser, RemoveUser}} >
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;