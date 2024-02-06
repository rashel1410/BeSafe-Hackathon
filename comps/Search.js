import React, { useEffect } from "react";
import { useState } from "react";
import { useGlobalContext } from '../public/context';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useRouter } from "next/router";

const Search = ({ app }) => {
    const { imposters } = useGlobalContext();
    const [namesList, setNamesList] = useState([]);
    const router = useRouter();

    useEffect(() => {
        if(app === 'Instagram')
        {
            const data = imposters?.filter(
                (imposter) => imposter.source === "instagram"
            );
            const names = data?.map((item) => {
                return {
                    id: item.id,
                    label: item.nick_name
                }
            });
            setNamesList(names);
        }
        else
        {
            const data = imposters?.filter(
                (imposter) => imposter.source === "facebook"
            );
            const names = data?.map((item) => {
                return {
                    id: item.id,
                    label: item.nick_name
                }
            });
            setNamesList(names);
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
                id="combo-box-demo"
                options={namesList}
                getOptionLabel={(option) => option.label}
                sx={{ width: 300, direction:"rtl"}}
                onChange={handleNameChange}
                renderInput={(params) => (
                        <TextField  {...params} label="חפש" />
                )}
            />
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