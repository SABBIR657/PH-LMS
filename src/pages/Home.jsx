import { Input, Pagination, Select, SelectItem, Spinner } from "@heroui/react";
import useFetchQuery from "../hooks/shared/useFetch";
import { useState } from "react";
import CommonWrapper from "../components/CommonWrapper";
import { categoryData, PerPageData } from "../enums/sortingData";



const Home = () => {
 const [category, setCategory] = useState("")
const [page, setPage] = useState(1)
const [searchQuery, setSearchQuery] = useState('')
const [perPage, setPerPage] = useState(5)

const queryParams = {
  searchTerm: searchQuery,
  limit: perPage,
  page: page,
};

if (category) {
  queryParams.category = category;
}


const { data, isSuccess, isLoading } = useFetchQuery('jobs', queryParams);
 const onCategoryChange = (value ) => {

if(value == "All"){
  console.log(value)

  setCategory("")
}else{
 
  const valueArray = value.split(',');
  console.log(valueArray)
  setCategory(valueArray)
}
 }
if(isSuccess){
  console.log(data)
}
 
const OnSearchChnage= (value)=> {
  setPage(1)
setSearchQuery(value)

}
  return(
   <>
   <CommonWrapper className="flex gap-8">
   <Input
        isClearable
        onChange={(e)=> {OnSearchChnage(e.target.value)}}
        label="Search"
        placeholder="Type to search..."
        radius="lg"
      
      />
<Select selectionMode="multiple" defaultSelectedKeys={[`All`]} onChange={(e)=> {onCategoryChange(e.target.value)}} className="max-w-xs" label="Category">
        {categoryData.map((animal) => (
          <SelectItem key={animal.key}>{animal.label}</SelectItem>
        ))}
      </Select>



      <Select defaultSelectedKeys={[`${perPage}`]} onChange={(e)=> {setPerPage(e.target.value)}} className="max-w-xs" label="Per Page">
        {PerPageData.map((animal) => (
          <SelectItem key={animal.key}>{animal.label}</SelectItem>
        ))}
      </Select>
   </CommonWrapper>
   <CommonWrapper> 
    {isLoading && <Spinner />} 
    {!isLoading &&  isSuccess && <>  Data: {data?.data?.length}</>}
    </CommonWrapper>
   <CommonWrapper>  
   <Pagination
    
      page={page}
    onChange={setPage}
      classNames={{
        wrapper: "gap-0 overflow-visible h-8 rounded border border-divider",
        item: "w-8 h-8 text-small rounded-none bg-transparent",
        cursor:
          "bg-gradient-to-b shadow-lg from-default-500 to-default-800 dark:from-default-300 dark:to-default-100 text-white font-bold",
      }}
      total={Math.ceil(data?.meta?.total/perPage)}
    />

    </CommonWrapper>  
    </>
  );
};

export default Home;
