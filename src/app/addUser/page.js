"use client";
import { useState } from "react";

import StudentAadhar from "./StudentAadhar";
import AdditionalDetails from "./additionalDetails";
import ContactDetails from "./contactDetails";
import GeneralProfile from "./generalProfile";
import LearningAndSpecial from "./learingAndSpecial";
import UsefulInfo from "./useFulInfo";

export default function Page() {
  const [formData, setFormData] = useState({
    enrollmentNo: "",
    admissionDate: "",
    class: "",
    studentId: "",
    penNo: "",
    studentName: "",
    DOB: "",
    gender: "",
    fatherName: "",
    AdhaarFather: "",
    FatherQualification: "",
    fatherOccupation: "",
    motherName: "",
    adhaarMother: "",
    motherQualification: "",
    motherOccupation: "",
    gaurdianName: "",
    adhaarGaurdianName: "",
    relationWithGaurdian: "",
    studentAdhaar: "",
    adhaarStudentName: "",
    SOid: "",
    village: "",
    post: "",
    dist: "",
    pinCode: "",
    stateName: "",
    motherMobile: "",
    fatherMobile: "",
    whatsappNo: "",
    email: "",
    previousYearAttendDays: "",
    marksPercent: "",
    specialCategory: "",
    rationCardType: "",
    RationCardNo: "",
    adhaarDOB: "",
    villagePanchayat: "",
    motherTongue: "",
    socialCategory: "",
    minorityGroup: "",
    digitisedRationCardNo: "",
    aplBeneficiary: "",
    bplBeneficiary: "",
    CWSN: "",
    aayBeneficiary: "",
    aayNone: "",
    disabilityType: "",
    nationality: "",
    outOfSchool: "",
    previousAttendDays2nd: "",
    attandanceDays: "",
    hindi: "",
    english: "",
    maths: "",
    gk: "",
    dancing: "",
    singing: "",
    game: "",
    yoga: "",
    numberofGame: "",
    CWSNDetail: "",
  });
  console.log(formData);

  const [image, setImage] = useState()
  // console.log(image);
  const clearForm = () => {
    setFormData({
      enrollmentNo: "",
      admissionDate: "",
      class: "",
      studentId: "",
      penNo: "",
      studentName: "",
      DOB: "",
      gender: "",
      fatherName: "",
      AdhaarFather: "",
      FatherQualification: "",
      fatherOccupation: "",
      motherName: "",
      adhaarMother: "",
      motherQualification: "",
      motherOccupation: "",
      gaurdianName: "",
      adhaarGaurdianName: "",
      relationWithGaurdian: "",
      studentAdhaar: "",
      adhaarStudentName: "",
      SOid: "",
      village: "",
      post: "",
      dist: "",
      pinCode: "",
      stateName: "",
      motherMobile: "",
      fatherMobile: "",
      whatsappNo: "",
      email: "",
      previousYearAttendDays: "",
      marksPercent: "",
      specialCategory: "",
      rationCardType: "",
      RationCardNo: "",
      adhaarDOB: "",
      villagePanchayat: "",
      motherTongue: "",
      socialCategory: "",
      minorityGroup: "",
      digitisedRationCardNo: "",
      aplBeneficiary: "",
      bplBeneficiary: "",
      CWSN: "",
      aayBeneficiary: "",
      aayNone: "",
      disabilityType: "",
      nationality: "",
      outOfSchool: "",
      previousAttendDays2nd: "",
      attandanceDays: "",
      hindi: "",
      english: "",
      maths: "",
      gk: "",
      dancing: "",
      singing: "",
      game: "",
      yoga: "",
      numberofGame: "",
      CWSNDetail: "",
    })
  }

  // const handleUpload = async (e) => {
  //   e.preventDefault();
  //   const data = new FormData();
  //   data.set("file", image);
  //   const res = await fetch("http://localhost:3000/api/upload", {
  //     method: "POST",
  //     body: data,
  //   });
  //   console.log(await res.json());
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {formData}

    const res = await fetch("http://localhost:8000/fill-pdf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const pdfBlob = await res.blob();
    const url = window.URL.createObjectURL(pdfBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${formData.studentName}.pdf`; // Set the filename for the downloaded file
    document.body.appendChild(a);
    
    // Simulate a click event to trigger the download
    a.click();
    
    // Clean up resources
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);


  }


  return (
    <div>
      <form className="my-20" onSubmit={(e)=>handleSubmit(e)} id="studentForm">
        <div>
          <h1 className="text-3xl font-bold mb-10 text-center underline">
            Student Details
          </h1>
        </div>
        <GeneralProfile formData={formData} setFormData={setFormData}  />
        <StudentAadhar formData={formData} setFormData={setFormData} />
        <ContactDetails formData={formData} setFormData={setFormData} />
        <UsefulInfo formData={formData} setFormData={setFormData} />
        <AdditionalDetails formData={formData} setFormData={setFormData} />
        <LearningAndSpecial formData={formData} setFormData={setFormData} />
        {/* <div className="">
          <h1 className="text-2xl font-semibold underline">Upload Documents</h1>
          <div className="flex mt-10 justify-center items-center gap-10">
            <label>Upload Student's Photo:</label>
            <input type="file" onChange={(e) => setImage(e.target.files?.[0])} className="block" />
            <button onClick={(e)=>handleUpload(e)} className=" bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-700" type="submit">Upload</button>
          </div>
        </div> */}
        <div className="flex justify-center items-center gap-10 mt-10">
          <button className=" bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-700" onClick={clearForm}>Clear Form</button>
          <button className=" bg-blue-600 px-9 py-2 rounded-lg text-white hover:bg-blue-700" type="submit">Submit</button>
        </div>
        
      </form>
    </div>
  );
}
