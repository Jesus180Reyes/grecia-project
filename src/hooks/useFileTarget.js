import { useDispatch, useSelector } from "react-redux";
import { onUserAuth, uploadMethod } from "../store/uploads/uploadsSlice";
export const useFileTarget = ()=> {
    const dispatch = useDispatch();
    
    const {uploads,displayName,}= useSelector(state => state.uploads);
    
    const startUpload = (file = [] )=> {
        dispatch(uploadMethod(file));
    }

    const authUser = ()=> {
        dispatch(onUserAuth("Jesus"));
    }
    
    
    return{
        // * Propiedades
        uploads,
        displayName,
        // * Metodos
        startUpload,
        authUser
    }

}