import {useState, useEffect} from 'react';

const useList = () =>{
  const impostersList = JSON.parse(localStorage.getItem('list'))
  const [list, setList] = useState(impostersList)
  useEffect(() =>{
    localStorage.setItem('list', JSON.stringify(list));
  } , [list]);
}

export default useList;
