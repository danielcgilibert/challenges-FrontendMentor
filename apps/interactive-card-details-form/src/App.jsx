import { useState } from 'react'
import bgCardBack from './assets/bg-card-back.png'
import cardLogo from './assets/card-logo.svg'
import { Form } from './components/Form'

function App() {
  const [inputsForm, setInputsForm] = useState({
    cardHolderName: 'JANE APPLESEED',
    CardNumber: ['0000', '0000', '0000', '0000'],
    expDateMM: '00',
    expDateYY: '00',
    cvc: '000',
  })
  return (
    <main className="grid grid-cols-1  grid-rows-[200px,1fr] h-screen  md:grid-cols-2 text-lg">
      <div className="relative  text-white p-5 grid-col md:h-screen  bg-cover bg-[url('./assets/bg-main-mobile.png')] md:bg-[url('./assets/bg-main-desktop.png')]">
        <img
          src={bgCardBack}
          className="w-3/4 h-3/4 absolute top-4 inset-y-0 right-4"
        />
      </div>

      <div className="relative  flex bg-whiteT px-5 pt-20 justify-start items-start ">
        <div className="absolute w-3/4 h-40 py-4 rounded-lg   -top-24  bg-cover bg-[url('./assets/bg-card-front.png')] px-5">
          <div className="h-1/2 ">
            <img src={cardLogo} className="w-16" />
          </div>

          <div className="h-1/2 text-white flex flex-col gap-2 ">
            <div className="flex justify-between ">
              {inputsForm.CardNumber.map((element, index) => (
                <p key={index}>{element}</p>
              ))}
            </div>
            <div className="text-xs flex justify-between ">
              <p>{inputsForm.cardHolderName}</p>
              <p>
                {inputsForm.expDateMM}/{inputsForm.expDateYY}
              </p>
            </div>
          </div>
        </div>
        <Form inputsForm={inputsForm} setInputsForm={setInputsForm} />
      </div>
    </main>
  )
}

export default App
