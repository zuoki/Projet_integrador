 import Style from './SearchBar.module.css'
 import React,{useState} from 'react';


 const SearchBar = ({onSearch,randomAdd}) => {

   const [id, setId] = useState('');

  const handleChange = (event) => {
      setId(event.target.value);}

   return (
      <div>
         <input  placeholder=' 1,2,3....'   className={Style.SearchBar}  type='search'  value={id} onChange={ handleChange}/> 
         <button className={Style.Button}  onClick={()=>onSearch(id)}>buscar</button> 
         <button className={Style.Button2}  onClick={()=>randomAdd()}>random</button> 

      </div>
   );
};

export default SearchBar;
