import countries from "i18n-iso-countries";

import { Avatar, Typography } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { useState } from "react";

countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

interface CountrySelectProps {
  value?: any;
  onChange?: (value: any) => void;
}

export const CountrySelect = ({
  value = {
    code: "US",
    name: "United States of America",
  },
  onChange,
}: CountrySelectProps) => {
  const EN_COUNTRIES = countries.getNames("en", { select: "official" });

  const [countryCode,setCountryCode]=useState();

  const setCountry: any=(event:any)=>{
    const code = event.target.value;
   value={
    code: code,
    name: EN_COUNTRIES[code],
   }
   setCountryCode(value.code)
  }

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="country-simple">Country</InputLabel>
      <Select
        value={countryCode ?? value.code}
        onChange={(event: any) => {
          const code = event.value;
          onChange({
            code: code,
            name: EN_COUNTRIES[code],
          });
          setCountry(event)
        }}
        inputProps={{
          name: "country",
          id: "country-simple",
        }}
      >
        {Object.entries(EN_COUNTRIES).map(([code, name]) => (
          <MenuItem value={code}>
            <Avatar
              alt={name}
              // Country flags are from this NPM package: https://www.npmjs.com/package/country-flag-icons
              src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${code}.svg`}
            />
            <Typography>{name}</Typography>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CountrySelect;
