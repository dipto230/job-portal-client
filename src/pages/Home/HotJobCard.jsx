import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { Link } from 'react-router-dom';

const HotJobCard = ({job}) => {
    const{_id,tittle, company, company_logo,requirements,description,location,salaryRange} =job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
       <div className='flex gap-2 m-2'>
       <figure>
          <img
          className='w-16'
            src={company_logo}
            alt="company_logo" />
        </figure>
        <div>
            <h4 className='text-2xl'>{company}</h4>
            <p className='flex gap-1 items-center'> <FaLocationDot /> {location}</p>
        </div>
       </div>
        <div className="card-body">
          <h2 className="card-title">{tittle}
          <div className="badge badge-secondary">NEW</div>
          
          
          </h2>
          <p>{description}</p>
          <div className='flex gap-2 flex-wrap'>
            {
                requirements.map((skill, index) => <p key={index} className='border rounded-md text-center hover:text-blue-500 hover:bg-gray-700'>
               
                {skill}</p>)
            }
          </div>
          <div className="card-actions justify-end items-center mt-4">
          <p className='flex items-center'> <MdOutlineCurrencyExchange />  Salary:{salaryRange.min}-{salaryRange.max} {salaryRange.currency}</p>
            <Link to={`/jobs/${_id}`}>
            <button className="btn btn-primary">Apply</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default HotJobCard;