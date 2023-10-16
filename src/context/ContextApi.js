import React,{createContext,useState,useEffect} from 'react'
import {fetchDataFromApi} from "../utils/Api";
export const Context =createContext();
export const AppContext=(props)=>{
    const [loading,setLoading]=useState(false);
    const [searchResults,setSearchResults]=useState(false);
    const [selectCategories,setSelectCategories]=useState(false);
    const [mobileMenu,setMobileMenu] =useState(false);

    useEffect(()=>{
        fetchSelectCategoriesData(selectCategories)

    },[selectCategories]);
    const fetchSelectCategoriesData=(query)=>{
        setLoading(true)
        fetchDataFromApi(`search/?q=${query}`).then((res)=>{
            console.log(res);
            // setSearchResults(res)
            setLoading(false)
        })
    }
    return(
        <Context.Provider value={{
            loading,
            setLoading,
            searchResults,
            setSearchResults,
            selectCategories,
            setSelectCategories,
            mobileMenu,
            setMobileMenu


        

        }}>
            {props.children}
        </Context.Provider>
    )
}