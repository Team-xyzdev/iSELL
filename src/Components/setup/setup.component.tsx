// Copyright iSELL 💳 2022 
// 17 U.S.C §§ 101-1511

//importing relevant modules 
import { useState,useRef } from "react";
import "./setup.css";
import { Link } from "react-router-dom";
import { UilImage } from '@iconscout/react-unicons'

// import firebase modules
import { storage } from "../../firebase/firebase.utils";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage"

//JSX component
const Setup = () => {

  // initial value state
  const [values, setValues] = useState({
     businessName : "",
     description : "",
     businessLogoUrl : "",
     imageLogo : ""
  })

  // values
  const {businessName, description, businessLogoUrl, imageLogo} = values;

  // handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
    };
  
    // handle form submit
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const file= imagePicker.current.files[0]
    console.log(file);
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    
    uploadTask.on("state_changed",
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setValues({
          ...values,
          businessLogoUrl : downloadURL
        })
      });
  })

}

// image input ref
  const imagePicker:React.MutableRefObject<null | any>= useRef(null)

  // showing images
  const addHeaderImage = (e :any) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent :any) => {
      setValues({
        ...values,
        imageLogo : readerEvent.target.result
      })
    };
  };

 // building block
  return (
    <div className="set">
      <div className="set-1">
        <div className="set-12">
          <div>
            <a className="a-12" href="www.google.com">
              <p>iSELL</p>
            </a>
            <div className="div-12">
              <h2 className="h2-12">
                Welcome to <span> iSELL </span> create an account
              </h2>
            </div>
          </div>
          <div></div>
        </div>
        <div className="set-13">
          <div></div>
        </div>
      </div>
      <div className="set-2">
        <div className="set-21">
          <div>
            <div className="set-213">
              <Link to="/login" className="a-tag">
                <p>Dashboard</p>
              </Link>

              <div className="set-2133">
                <h1>Tell us about your Business</h1>
                <p>
                  please provide basic goals about your business to get started
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="f-1">
                    <div className="f-11">
                      <label>Business Name</label>
                      <div>
                        <input
                          id="fullName"
                          type="text"
                          name="businessName"
                          onChange={handleChange}
                          value={values.businessName}
                          placeholder="e.g iSELL"
                        />
                      </div>
                    </div>

                    <div className="f-11">
                      <label>Short description of your business</label>
                      <div>
                        <input
                          id="description"
                          type="text"
                          onChange={handleChange}
                          value={values.description}
                          name="description"
                          placeholder="Description"
                        />
                      </div>
                    </div>
                    <div className="upload_sect_img">
                      <div className="upload_hd_img">
                        {imageLogo ? (
                          <img src={imageLogo} alt="" />
                        ) : (
                          <UilImage className="image__default"/>
                        )}
                      </div>
                    <input
                      ref={imagePicker}
                      hidden
                      onChange={addHeaderImage}
                      type="file"
                      accept=".jpg, .jpeg, .png"
                    />
                    <div
                      className="upload_add_img"
                      onClick={() => imagePicker.current.click()}
                    >
                       <p>Upload your Logo</p>
                     
                 </div>
                 
                    </div>
                     <p>{businessLogoUrl}</p>
                   </div>

                  <div className="f-3">
                    <button type="submit">
                      <span>Save and continue</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setup;
