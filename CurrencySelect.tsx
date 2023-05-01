import CurrencyData from "currency-codes/data";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import { ChangeEvent, ReactNode, useState } from "react";

interface CurrencySelectProps {
  value?: any;
  onChange?: (event: ChangeEvent<HTMLSelectElement>, child: ReactNode) => void;
}

const CurrencySelect = ({ 
  value = {
  name: "US Dollar",
  id: "USD"
}, onChange }: CurrencySelectProps) => {
  const [currencyCode,setCurrencyCode]=useState(value);

  const setCurrency: any=(event:any)=>{
    const code = event.target.value;
    const cuu=CurrencyData.filter((i:any)=>i.code===code)
    const val={
      name:cuu.currency,
      id:code
    }
    setCurrencyCode(val??value)
   
  
  }
  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="currency-simple">Currency</InputLabel>
      <Select
        value={currencyCode? currencyCode.name:value.name}
        onChange={(event:any)=>{
          setCurrency(event);
          
        }}
        inputProps={{
          name: "currency",
          id: "currency-simple",
        }}
      >
        {CurrencyData.map(({ code, currency }) => (
          <MenuItem value={code}>{currency}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CurrencySelect;
