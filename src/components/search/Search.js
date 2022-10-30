import { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'

import { GEO_API_URL, options} from '../../api';

const Search = ({onSearchChange}) =>
{
    const [search, setSearch] = useState(null);

    const loadOptions = (inputValue) =>
    {
        return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, options)
        .then((response) => response.json())
            .then((response) =>
            {
                return {
                    options: response.data.map((city) =>
                    { 
                        return {
                            value: `${city.latitude} ${city.longtitude}`,
                            label: `${city.name} ${city.countryCode}`
                        }
                    })
                }
            }
            )
        .catch(err => console.error(err));
    }

    const handleOnChange = (e) =>
    {
        setSearch(e)
        onSearchChange(e)
    }


    return (
      <AsyncPaginate
          placeholder='search for city'
          debounceTimeout={600}
          value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
      />
  )
}

export default Search