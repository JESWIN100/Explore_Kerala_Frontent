import {create} from 'zustand'


const useLoginStore = create((Set)=>({

    isToggle:true,
    setToggle:()=>Set((state)=>({isToggle:!state.isToggle}))

}))

 export default useLoginStore 