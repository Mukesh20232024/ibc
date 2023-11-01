import React from 'react';
import PropTypes from "prop-types";

export default function ServicesProvide(props) {
    const boxeslistarray = [
        {
            design: "0",
            heading: "On-Campus Placement Drives",
            paragraph: "We will visit colleges to select final year students and selection depends upon a student's ability to work-hard, his technical capabilities and his focus."
        },
        {
            design: "0",
            heading: "Off-Campus / Pool Campus Placement Drives ",
            paragraph: "Recruitment is conducted at a common place that may be a particular college where students from different colleges assemble and take part in the various stages of the campus placement drive."
        },
        {
            design: "C",
            heading: "Contract Staffing",
            paragraph: "We works to find qualified talent (workers), handling much of the qualifying and interview process. The worker is then hired as a contract employee hired on contract for a specific job, for a specific pay rate"
        },
        {
            design: "P",
            heading: "Payroll Management",
            paragraph: "We take care of entire payroll processing which include accurate payroll calculations, disbursal, pay slip generation, and managing payroll taxes and record keeping compliance."
        },
        {
            design: "P",
            heading: "Providing Interns",
            paragraph: " Good internship programs treat junior workers as real staff members who perform worthwhile tasks. Good internships are a boost to your employer brand and a boon for your recruitment strategy"
        },
        {
            design: "T",
            heading: "Training & Development",
            paragraph: " We provide training to focuses on doing activities today to develop employees for their current jobs and we provide development for future roles and responsibilities. Training and development is to creative learning which boost in performance of an individual or team"
        }
    ]

    const arrayboxescard = boxeslistarray.map((c_value, i) => {
        return <div className='box-icon-1'>
            <div className='box-icon-top'>
                <h4 className='pt-6 mt-5 font-bold tracking-tight' ><span className="box-icon-typo">{boxeslistarray[i].design}</span>{boxeslistarray[i].heading}</h4>
            </div>
            <p>{boxeslistarray[i].paragraph}</p>
        </div>
    })

    return (
        <>
            <div className="main_heading">
                <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                    <h1 id="aboutus" className="mt-16 text-4xl font-bold tracking-tight text-gray-900 text-center border-b-4 border-black ">SERVICES WE PROVIDE</h1>
                </div>
            </div>
            <div className="gap-6  mt-11  holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                {arrayboxescard}
            </div>

        </>
    )
}


ServicesProvide.propTypes = {};