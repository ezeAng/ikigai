import React, {useEffect, useState} from 'react';
import FormPage from './FormPage';


const Form = () => {
    const formConfigs = {
        0: {
            title: "Personal Information",
            desc: "Before we start, lets get to know more about you.",
            field_names: ["first_name", "last_name"],
            fields: {

            }
        },
        1: {
            title: "Personal Information II",
            desc: "A little more...",
            field_names: ["age", "gender"],
            fields: {
                
            }
        },
        2: {
            title: "Other",
            desc: "Ready to discover yourself?",
            field_names: ["nationality", "place_of_residence"],
            fields: {
                
            }
        },
        3: {
            title: "Submit",
            desc: "Ready to discover yourself?",
            field_names: [],
            fields: {
                
            }
        }
    }
    const formCount = Object.keys(formConfigs).length;
    const [page, setPage] = useState(0);
    const [formProgress, setFormProgress] = useState(1/formCount);

    const [data, setData] = useState({
        email: "",
        first_name: "Faks",
        last_name: "Sayke",
        age: 0,
        gender: "",
        nationality: "Singapore",
        place_of_residence: "Singa",
        employment_status: ""
    });

    useEffect(() => {
        updateFormProgress();
    }, [page]);



    const movePageForward = () => {
        var curr = page;
        if (curr + 1 < formCount) {
            setPage(curr + 1);
        }
    }

    const movePageBackward = () => {
        var curr = page;
        if (curr - 1 >= 0) {
            setPage(curr - 1);
        }
    }

    const setFormData = (target, val) => {
        var newData = {...data};
        newData[target] = val;
        setData(newData);

        console.log(data);
    }

    const updateFormProgress = () => {
        var totalPages = formCount;
        var pageCount = page + 1;
        var ratio = pageCount / totalPages;
        setFormProgress(ratio);
    }

  return (
    <div>
        <h1>Begin your journey here.</h1>

        <div className='progress-bar'>{formProgress}</div>
        <div className='form-container'>
            
            <div className='form-page-details'>
                <h2>{formConfigs[page].title}</h2>
                <h3>{formConfigs[page].desc}</h3>
            </div>
            
            <FormPage formConfig={formConfigs[page]} formData={data} updateFormData={setFormData} />

            {page !== formCount - 1 ? 
                <div className='form-button-bar'>
                    <button onClick={movePageBackward}>Prev</button>
                    <button onClick={movePageForward}>Next</button>
                </div> 
            : null}
            {page === formCount -1 ? 
                <div>
                    <button onClick={movePageBackward}>Go Back.</button>
                    <button>Submit</button>
                </div> 
            : null }
        </div>
    </div>
  )
}

export default Form