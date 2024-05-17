import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

export function useActions(actions:any){
    const dispatch = useDispatch()
    if(Array.isArray(actions)){
        return actions.map((action => bindActionCreators(action,dispatch)))
    }
    return bindActionCreators(actions,dispatch)
}