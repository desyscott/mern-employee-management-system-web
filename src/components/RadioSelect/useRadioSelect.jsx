import React,{Fragment,useState} from 'react';



export const FormRadioSelect = ({ options, setTab,defaultValue, label, ...otherProps }) => {
  
    const [selected,setSelected]=useState()
    const [values,setValues]=useState()
    
    
    const handleChange=(e)=>{
      const {value,name}=e.target;
      setValues({
        ...values,
        [name]:value,
      });
      console.log(values)
  
    }
    
 
  if (!Array.isArray(options) || options.length < 1) return null;
  return (
    <Fragment>

        {options.map((option, index) => {
          const { value, label,name,desc } = option;
          return (
               <Fragment key={index}>
          <div className={ `col-span-6 sm:col-span-3 border py-5 mx-1 px-5 rounded shadow transition duration-300 hover:bg-blue-50  hover:shadow-md cursor-pointer ${selected===index && "border-100 bg-blue-100  bg-opacity-50 shadow-md"}`}
           onClick={()=>{
            setSelected(index)
           }}>
          <div className="flex justify-items-center items-center mb-2">
            <input
             type="radio"
            required
            name={name}
            value={value} 
            checked={selected===index}
            onChange={handleChange}
            id="newMerchant"
            className="mt-1 focus:ring-teal-500 focus:border-gray-500  shadow-sm sm:text-sm border-gray-300   cursor-pointer "
        />
           {label && (
        <label  className="block text-sm font-medium cursor-pointer text-gray-700 ml-2">
          {label}
        </label>
      )}
          
      </div>
      <div>
           <span>{value==="newMerchant" ? 
           <p>yes</p> : value ==="momoMerchant" && <p>no</p> 

           
           }</span>
           </div>
          </div>
            </Fragment>
          );
        })}
       
    </Fragment>
  );
}

