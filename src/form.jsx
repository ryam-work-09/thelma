// form.jsx
import React, { useState } from "react";
import "./App.css";
import { supabase } from "./supabaseClient";

export default function FormPage() {

  // ↳ Store all form data
  const [formData, setFormData] = useState({
    enquiry_occasion: "",
    event_venue: "",
    date: "",
    name: "",
    email: "",
    contact_number: "",
    flower_budget: "",
    colour_palette: "",
    floral_requirements: "",
    floral_vision: "",
    how_hear_about_us: "",
    additional_notes: "",
  });

  // ↳ File upload state
  const [inspoFile, setInspoFile] = useState(null);

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  // Submit form to Supabase
  const handleSubmit = async (e) => {
    e.preventDefault();

    let inspoImageUrl = null;

    // SAVE IMAGE TO SUPABASE STORAGE
    if (inspoFile) {
      const fileName = `${Date.now()}-${inspoFile.name}`;

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("inspo")
        .upload(fileName, inspoFile);

      if (uploadError) {
        alert("Image upload failed!");
        return;
      }

      inspoImageUrl = uploadData.path;
    }

    // INSERT FORM DATA INTO SUPABASE TABLE
    const { data, error } = await supabase.from("enquiries").insert([
      {
        ...formData,
        inspo_image_url: inspoImageUrl,
      },
    ]);

    if (error) {
      console.log(error);
        alert(error.message);

    } else {
      alert("Thank you! Your enquiry has been submitted ✅");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#F2D9E8",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div className="form-wrapper">
        <h1 className="title">ENQUIRY FORM</h1>

        <form className="form-grid" onSubmit={handleSubmit}>

          <div className="field">
            <label>Your Enquiry Occasion*</label>
            <select name="enquiry_occasion" onChange={handleChange}>
              <option value="">Select an option</option>
              <option value="wedding">Wedding</option>
              <option value="event">Event</option>
              <option value="custom">Custom Design</option>
              <option value="corporate">Corporate Design</option>
            </select>
          </div>

          <div className="field">
            <label>Event Venue*</label>
            <input name="event_venue" type="text" onChange={handleChange} />
          </div>

          <div className="field">
            <label>Your Date*</label>
            <input name="date" type="date" onChange={handleChange} />
          </div>

          <div className="field">
            <label>Your Name*</label>
            <input name="name" type="text" onChange={handleChange} />
          </div>

          <div className="field">
            <label>Email*</label>
            <input name="email" type="email" onChange={handleChange} />
          </div>

          <div className="field">
            <label>Contact Number*</label>
            <input name="contact_number" type="text" onChange={handleChange} />
          </div>

          <div className="field">
            <label>Flower Budget*</label>
            <select name="flower_budget" onChange={handleChange}>
              <option value="">Select a budget</option>
              <option value="events-only">Events only (no weddings from $300)</option>
              <option value="wedding-minimum">Weddings minimum spend $3,000</option>
            </select>
          </div>

          <div className="field">
            <label>Do You Have a Colour Palette?*</label>
            <input name="colour_palette" type="text" onChange={handleChange} />
          </div>

          <div className="field full">
            <label>Floral Requirements*</label>
            <textarea
              name="floral_requirements"
              placeholder="EG: BRIDESMAIDS BOUQUETS X 4, BUTTONHOLES X 5..."
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="field">
            <label>Do You Have a Vision for Your Florals?*</label>
            <select name="floral_vision" onChange={handleChange}>
              <option value="">Select an option</option>
              <option value="no-idea">Absolutely no idea what I'm doing!!</option>
              <option value="rough-idea">I have a rough idea, but need assistance</option>
              <option value="solid-plan">I have a solid plan!!</option>
            </select>
          </div>

          <div className="field">
            <label>Show Us Your Inspo</label>
            <input type="file" onChange={(e) => setInspoFile(e.target.files[0])} />
          </div>

          <div className="field">
            <label>How Did You Hear About Us?</label>
            <input name="how_hear_about_us" type="text" onChange={handleChange} />
          </div>

          <div className="field">
            <label>Anything You’d Like to Add?</label>
            <input name="additional_notes" type="text" onChange={handleChange} />
          </div>

          <button className="submit-btn">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}
