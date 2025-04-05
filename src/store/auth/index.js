import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    currentAccount: {
        id: 1,
        username: 'mstfdn',
        fullName: 'Mustafa Fidan',
        avatar: 'https://img.freepik.com/free-vector/realistic-samurai-illustrated-background_52683-69460.jpg'
    },
    accounts: [
        {
            id: 1,
            username: 'mstfdn',
            fullName: 'Mustafa Fidan',
            avatar: 'https://img.freepik.com/free-vector/realistic-samurai-illustrated-background_52683-69460.jpg'
        },
        {
            id: 2,
            username: 'esrafdn',
            fullName: 'Esra Fidan',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPvRMPGaehmnaqGfoHGSyvBqaFNEIkYE0q2w&s'
        },
    ]
}


const auth = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        //state manipulation
        _addAccount: (state, action) => {
            state.accounts.push(action.payload)
        },
        _removeAccount: (state, action) =>{
            state.accounts = state.accounts.filter(account => account.id !== action.payload)
            if(state.currentAccount.id && action.payload === state.currentAccount.id){
                 this._setCurrentAccount(false)
            }
        },
        _setCurrentAccount: (state, action) => {
            state.currentAccount = action.payload
        }
    }
})
export const { _addAccount, _removeAccount, _setCurrentAccount } = auth.actions
export default auth.reducer