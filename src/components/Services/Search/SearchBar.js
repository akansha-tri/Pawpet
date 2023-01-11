import React, { useState } from "react"
import { Box, Badge } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image"
import { Input, Button, Select } from "@chakra-ui/react"
import { Wrap, WrapItem } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"


const SearchBar = (props) => {
  const [location, setLocation] = useState("");
  const [searchData, setSearchData] = useState({
    location: ""
  });

  const handleSearch = (e) => {
    setLocation(e.target.value)
    const {name, value} = e.target;
    setSearchData( prevValue => {
        return {
            ...prevValue,
            [name]: value
        }
    } ); 
  }

  const handleClick = () => {
    console.log(searchData)
    props.sendSearchData(searchData)
  }
  return (
    <>
      <Wrap mt="15px" justify="right" spacing="30px">

        <WrapItem>
          <Input boxShadow="md" name="state" style={{ width: "300px" }} variant="filled" placeholder="State" />
        </WrapItem>
        <WrapItem>
          <Input boxShadow="md" name="searchLocation"  style={{ width: "300px" }} variant="filled" placeholder="City" />
        </WrapItem>
        <WrapItem>
          <Input boxShadow="md" name="location" onChange={handleSearch} style={{ width: "300px" }} variant="filled" placeholder="Pincode" />
        </WrapItem>
        <WrapItem>
          <Select boxShadow="md" variant="filled" style={{ width: "300px" }} placeholder="Select Country">
            <option value="option1">USA</option>
            <option value="option2">MEXICO</option>
            <option value="option3">CANADA</option>
          </Select>
        </WrapItem>
        <WrapItem>
          <Button boxShadow="lg" w="150px" onClick={handleClick} leftIcon={<SearchIcon />} colorScheme="orange" variant="solid">
            Search
          </Button>
        </WrapItem>
      </Wrap>




    </>
  )
}

export default SearchBar;