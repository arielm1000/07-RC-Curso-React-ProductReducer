import React, {useState, useEffect} from 'react'

export default function useForm (initValues = {}, edit) {

    const [form, setForm] = useState(initValues);

    useEffect(() => {
      setForm(initValues);
    }, [edit])
    

    const onChangeForm = (value, field) => {
       setForm({
            ...form,
            [field]: value,
        })
    }

  return {
    form,
    onChangeForm
  }
}
