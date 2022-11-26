import React from 'react'

export const Form = ({ inputsForm, setInputsForm }) => {
  const handleForm = e => {
    const { name, value } = e.target
    if (name === 'CardNumber') {
      const numbers = value.split('').filter(word => word !== ' ')
      let newA = []
      for (let index = 0; index < numbers.length; index = index + 4) {
        newA.push(numbers.slice(index, index + 4).join(''))
      }
      console.log(newA)
      setInputsForm(prevState => ({
        ...prevState,
        [name]: newA,
      }))
    } else {
      setInputsForm(prevState => ({
        ...prevState,
        [name]: value,
      }))
    }
  }
  return (
    <form className="flex flex-col gap-2">
      <label>
        CARDHOLDER NAME
        <input
          type="text"
          name="cardHolderName"
          placeholder="e.g. Jane Appleseed"
          onChange={handleForm}
        />
      </label>

      <label>
        CARD NUMBER
        <input
          type="string"
          name="CardNumber"
          placeholder="e.g. 1234 5678 9123 0000"
          min="16"
          onChange={handleForm}
        />
      </label>

      <div className="flex">
        <label className="flex w-2/4">
          EXP. DATE (MM/YY)
          <div className="flex flex-row">
            <input
              type="number"
              name="expDateMM"
              placeholder="MM"
              className="w-1/2 mr-2"
              onChange={handleForm}
            />
            <input
              type="number"
              name="expDateYY"
              placeholder="YY"
              className="w-1/2 mr-2"
              onChange={handleForm}
            />
          </div>
        </label>

        <label className="w-2/4">
          CVC
          <input
            type="number"
            name="cvc"
            placeholder="e.g. 123"
            onChange={handleForm}
          />
        </label>
      </div>
      <input
        type="submit"
        value="Confirm"
        className="bg-VeryDarkViolet text-white rounded-lg py-4"
      />
    </form>
  )
}
