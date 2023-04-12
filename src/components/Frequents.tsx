import { FrequentQProps } from "../type/type"
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
import { useState } from "react"
type Frequents = {
    frequentsQ: FrequentQProps
    
}
const Frequents = ({frequentsQ:{title, subtitle, questions}}:Frequents) => {
    const [showAnswer, setShowAnswer] = useState<number | null>(null)
    const handleShowAnswers = (id:number) =>{
        setShowAnswer(id === showAnswer ? null : id)
    }
   
    const questionsElement = questions.map(({id,question, answer}) =>
        <div key={id} className='border border-black shadow-sm shadow-slate-900 rounded-xl px-4 py-3'>
            <div onClick={()=>handleShowAnswers(id)} className='font-bold flex items-center gap-4 border-b justify-between border-gray-500/30 py-2'>
                <h2 className="text-sm text-orange-500">{question}</h2>
                {
                   showAnswer === id ?  <IoIosArrowUp className=" text-xl text-slate-200 cursor-pointer  " /> : <IoIosArrowDown className=" text-xl text-slate-200  " />
                }
                
              
            </div>
           { 
            showAnswer === id &&
           (<div className=" font-Necko text-sm overflow-y-auto max-h-40 duration-500 ease-in">
                <p>{answer}</p>
            </div>)
            
        }
        </div>
    )
  return (
    <div className="container max-w-[1100px] my-16 ">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {questionsElement}
        </div>
    </div>
  )
}

export default Frequents