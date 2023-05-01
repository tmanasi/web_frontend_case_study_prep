import ISO_6391_Languages from "iso-639-1";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import { ChangeEvent, ReactNode, useState } from "react";

interface LanguageSelectProps {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>, child: ReactNode) => void;
}

const LanguageSelect = ({ value = "en", onChange }: LanguageSelectProps) => {
  const LANGUAGES = ISO_6391_Languages.getLanguages([
    "en",
    "de",
    "pl",
    "fr",
    "it",
  ]);
  const [langCode,setlangCode]=useState();

  const setlang: any=(event:any)=>{
    const code = event.target.value;
    const cuu=LANGUAGES.filter((i:any)=>i.code===code)
    const val={
      name:cuu[0].name,
      id:code
    }
   setlangCode(code)
  }
  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="language-simple">Language</InputLabel>
      <Select
        value={langCode??value}
        onChange={(event: any)=>{
          setlang(event)
        }}
        inputProps={{
          name: "language",
          id: "language-simple",
        }}
      >
        {LANGUAGES.map(({ code, name, nativeName }) => (
          <MenuItem value={code}>
            {name} - {nativeName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguageSelect;
