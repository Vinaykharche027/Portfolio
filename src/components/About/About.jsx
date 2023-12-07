import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";


const About_data = [
  { Degree: "MCA", University: "Sandip University" , Year: "Present", percentage: "7.69" },
  { Degree: "BSc", University: "Sant Gadge Baba Amravati University" , Year: "2022", percentage: "78.04" },
  { Degree: "HSC", University: "State board of maharashtra", Year: "2019", percentage: "63.23"},
  { Degree: "SSC", University: "State board of maharashtra", Year: "2017", percentage: "74.60"},
]

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Education</h2>

        <div className="About_">
            <table className="tb">
                <tr>
                    <th>Degree</th>
                    <th>University/Board</th>
                    <th>Year</th>
                    <th>Percentage</th>
                </tr>
                {About_data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.Degree}</td>
                            <td>{val.University}</td>
                            <td>{val.Year}</td>
                            <td>{val.percentage}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
          
        
    </section>
  );
};
