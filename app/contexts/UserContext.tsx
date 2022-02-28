import React,{
    createContext,
    useEffect,
    useState,
} from "react";


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
    AddUser: (listU: Array<TUser> | any ) => Promise<void>;
    RemoveUser: (listU: Array<TUser> | any ) => Promise<void>;

};


const UserContext = createContext<UserType>({} as UserType);


export const UserProvider: React.FC = ({children}) =>{

    const[user, SetUserProfile] = useState<TUser | null>(null);
    const[listUser, SetLUser] = useState<Array<TUser> | []>([]);

    
    const validateUser = async(new_user: TUser)=>{
        if (listUser.length == 0) return false;
        
        
        let listU = listUser.filter((item:TUser) => item.id === new_user.id)
        
        return listU.length > 0? true : false ; 
    };


    async function AddUser(new_user: TUser){
        if(!new_user) return;

        if( await validateUser(new_user)) return;
        
        SetLUser([...listUser, new_user]);
           
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