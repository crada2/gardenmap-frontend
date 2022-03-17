import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../assets/styles/form.css";
<<<<<<< HEAD
import swal from "sweetalert";
=======
import swal from 'sweetalert'; 
import { useForm } from "react-hook-form";
>>>>>>> 5386b180f600ff7e99adaeb221c773568ae61fed

const GardenForm = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [observations, setObservations] = useState("");
  const [price, setPrice] = useState("");

  //POST
  const sendDataAPI = () => {
    axios
      .post(`http://localhost:8080/products`, {
        title,
        observations,
        price,
      })
      .then(() => {
        navigate("/garden");
        swal({
          title: "new service added successfully",
          text: "click 'ok' to continue",
          icon: "success",
        });
      });
  };

  /*const submitHandler = (event) => {
    event.preventDefault();
<<<<<<< HEAD
  };
=======

  };*/
>>>>>>> 5386b180f600ff7e99adaeb221c773568ae61fed

  const { register, handleSubmit, formState: { errors } } = useForm({mode: "onChange"});
  const onSubmit = (data) => {
    console.log(data);
    sendDataAPI();
    
  }; // your form submit function which will invoke after successful validation
  
  return (
    <div className="background">
      <div className="containerFormGarden">
        <div className="title">
          <p>What do you offer:</p>
        </div>
        <div className="content">
          <form className="form" onSubmit={handleSubmit(onSubmit)}>

            {/* title */}
            <div className="row">
              <div className="col-25">
                <label htmlFor="title">Title</label>
              </div>
              <div className="col-75">
                <input
                {...register("titleForm", 
                  {required:true, 
                  maxLength:30, })} 
                  id="title"
                  type="text"
                  placeholder="A title for your services"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>
            {errors.titleForm && <p className="error-text">Pleace, title is required</p>}

            {/* Observations */}
            <div className="row">
              <div className="col-25">
                <label htmlFor="price">Observations</label>
              </div>
              <div className="col-75">
                <input
                {...register("observationsForm", 
                  {required:true,
                  validate: (value) => value.length > 10
                  })
                } 
                  type="text"
                  placeholder="Observations:"
                  value={observations}
                  onChange={(e) => setObservations(e.target.value)}
                />
              </div>
            </div>
            {errors.observationsForm && <p className="error-text">Please, your observations are incomplete.</p>}

            <div className="row">
              <div className="col-25">
                <label htmlFor="price">Price</label>
              </div>
              <div className="col-75">
                <input
                {...register("priceForm", 
                { required:true, 
                  validate: {
                    positiveNumber: (value) => parseInt(value) > 0,
                  }
                  })} 
                  autoComplete="off"
                  type="text"
                  placeholder="How much does it cost?"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
<<<<<<< HEAD
            <button type="submit" onClick={sendDataAPI}>
              submit
            </button>
=======
            {errors.priceForm && errors.priceForm.type === "positiveNumber" && (
              <p className="error-text">The Price is invalid</p>
            )}
             {errors.priceForm && (<p className="error-text">The price is required.</p>)}
            
            <button  type="submit" >submit</button>
>>>>>>> 5386b180f600ff7e99adaeb221c773568ae61fed
          </form>
        </div>
      </div>
    </div>
  );
};

export default GardenForm;
