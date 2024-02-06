import React, { useEffect } from "react";
import { useState } from "react";
import { useGlobalContext } from '../public/context';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useRouter } from "next/router";



const Search = ({ app }) => {
    const { imposters } = useGlobalContext();
    const [namesList, setNamesList] = useState([]);
    //const [linksList, setLinksList] = useState([]);
    const router = useRouter();

    useEffect(() => {
        if(app === 'Instagram')
        {
            const data = imposters?.filter(
                (imposter) => imposter.source == "Instagram"
            );
            //names
            const names = data?.map((item) => {
                return {
                    ...item,
                    label: item.nick_name
                }
            });
            setNamesList(names);
            //links
            // const links = data?.map((item) => {
            //     return {
            //         ...item,
            //         label: item.profile_url
            //     }
            // });
            // setLinksList(links);
        }
        else
        {
            const data = imposters?.filter(
                (imposter) => imposter.source == "Facebook"
            );
            //names
            const names = data?.map((item) => {
                return {
                    ...item,
                    label: item.nick_name
                }
            });
            setNamesList(names);
            //links
            // const links = data?.map((item) => {
            //     return {
            //         ...item,
            //         label: item.profile_url
            //     }
            // });
            // setLinksList(links);
        }
    }, [imposters]);

    const handleNameChange = (event, value) => {
        if (value) {
            router.push(`profileDisplay/${value.id}`);
        }
    };

    // const handleLinkChange = (event, value) => {
    //     if (value) {
    //         router.push(`profileDisplay/${value.id}`);
    //     }
    // };

    return (
        <div className="search-bar-dropdown">
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={namesList}
                getOptionLabel={(option) => option.nick_name}
                sx={{ width: 300 }}
                onChange={handleNameChange}
                renderInput={(params) => <TextField  {...params} label="חפש לפי שם ..." />}
            />
            
            <br/>

            {/* <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={linksList}
                getOptionLabel={(option) => option.label}
                sx={{ width: 300 }}
                onChange={handleLinkChange}
                renderInput={(params) => <TextField  {...params} label="חפש לפי לינק ..." />}
            /> */}
        </div>
    );
}
 
export default Search;