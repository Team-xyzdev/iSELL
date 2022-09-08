// Copyright iSELL 💳 2022 
// 17 U.S.C §§ 101-1511

//importing relevant modules 
import { useState,useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import "./setup.scss";
import { UilImage, UilBellSchool, UilCommentAltMessage, UilBookmark} from '@iconscout/react-unicons'
import { businessTypeOption } from "./setup.business-type";


// import firebase modules
import { storage, 
      addSetupDetails,
      checkverification } from "../../firebase/firebase.utils";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage"

//JSX component
const Setup = () => {

  // get user uid from state
const getUserUid: string | null= useSelector(
       (state: RootState) => state.currentUser.currentUser)


  // initial value state
const [values, setValues] = useState({
     businessName : "",
     description : "",
     businessLogoUrl : "",
     imageLogo : "",
     businessType : "default"
  })

  // values
const {imageLogo, businessType} = values;

  // handle input change
    const handleChange:any = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name] : value,
      });
    };
  
    // handle form submit
const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // submit business details 
    await uploadImage()
    await addSetupDetails(getUserUid, values);
    const verified = await checkverification(getUserUid)
   if(verified) {
    return  window.location.pathname = '/'
    }
  return  window.location.pathname = '/setup'
}

// image input ref
const imagePicker:React.MutableRefObject<null | any>= useRef(null)

// dynamically upload pictures
useEffect(() => {
  uploadImage()
 // eslint-disable-next-line
}, [imageLogo])




// upload image 
  const uploadImage = async () => {
   try {
    const file=  imagePicker.current.files[0]
      if (!file) return
    const storageRef =  ref(storage, `files/${file.name}`);
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
     catch(eror) {
       console.log(eror)
     }
  }

  // showing images
const addHeaderImage = async (e :any) => {
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
    <div className="setup">
      <div className="setup__component1">
       <div className="layer"></div>
      </div>
      <div className="setup__component2">
         <div className="form__tag">
           <h2>Set up Your Business Account</h2>
           <form onSubmit={handleSubmit}>
             <div className="business__name">
              <UilBellSchool className="bus__name" />  
              <input
               type="text"
               name="businessName"
               onChange={handleChange}
               value={values.businessName}
               placeholder="Business Name" />
             </div>
             <div className="business__description">
               <UilCommentAltMessage className="description" />
               <input
                type="text"
                name="description"
                onChange={handleChange}
                value={values.description}
                placeholder="Description" />
             </div>
             <div className="business__type">
               <UilBookmark className="type" />
               <select 
                defaultValue={values.businessType} 
                onChange={handleChange} 
                name="businessType"
                style={{
                  color: businessType==="default" ? "grey" : "black"
                }}
                required>
                 <option disabled value="default" >Business Industry</option>
                 { businessTypeOption?.map((option, i) => (
                   <option key={i} value={option} >{option}</option>
                 ))}
               </select>
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
             <button type="submit">Set Up</button>
           </form>
         </div>
      </div>
    </div>

  );
};

export default Setup;
